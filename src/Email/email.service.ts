import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as jwt from 'jsonwebtoken';
import { emailHtml } from './HTML.Template'; // الـ HTML في ملف منفصل

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aa2949139@gmail.com', 
        pass: 'vpyr hdjx hrce sagb',  
      },
      tls: {
        rejectUnauthorized: false, 
      },
    });
  }

  async sendEmail(email: string): Promise<void> {
    try {
      const token = jwt.sign({ email }, 'Abod56321', { expiresIn: '1h' });

      const info = await this.transporter.sendMail({
        from: '"AbodHello" 👻 <aa2949139@gmail.com>',
        to: email,
        subject: 'Hello ✔',
        html: emailHtml(token),
      });

      console.log('Message sent: %s', info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
}