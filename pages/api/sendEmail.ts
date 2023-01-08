import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

type Data = {
  error?: any;
  response?: SMTPTransport.SentMessageInfo;
};

type NextApiRequestWithBody = NextApiRequest & {
  body: { name: string; email: string; subject: string; message: string };
};

export default async function handler(
  req: NextApiRequestWithBody,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  if (method === "POST") {
    const body = JSON.parse(req.body);
    const { email, subject, name, message } = body;

    if (
      !(
        name !== undefined ||
        !email !== undefined ||
        !subject !== undefined ||
        !body !== undefined
      )
    ) {
      res.status(500).json({ error: "Message was not sent successfully" });
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER_ID,
        pass: process.env.EMAIL_USER_PASS,
      },
    });

    const mailOptions = {
      from: '"Akds portfolio website" <app@gmail.com>',
      to: "akds@pm.me",
      subject: `arkadiusz.tech form -> Message from ${name}`,
      html: `<p>Subject: ${subject}</p>
      <p>Message: ${message}</p>
      <br />
      <p>Contact ${name} by responding to: '${email}'</p>
      `,
    };

    try {
      const response = await transporter.sendMail(mailOptions);
      res.status(200).json({ response });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}
