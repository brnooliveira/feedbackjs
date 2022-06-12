import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";



const transport = nodemailer.createTransport({
    host: "host",
    port: 'port',
    auth: {
      user: "user",
      pass: "pass"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject,body}: SendMailData) {
    await transport.sendMail({
      from: "Test <test@test.com>",
      to: "Test <test@test.com>",
      subject,
      html: body,
    });
  }
}
