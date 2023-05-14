// serverless function
// pages/api/contact/index.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const msg = {
      to: 'robert.s.hogan@icloud.com',
      from: 'robert.s.hogan@icloud.com',
      subject: `New contact from ${name}`,
      text: message,
      html: `<strong>${message}</strong>`,
    };

    try {
      await sgMail.send(msg);
      res
        .status(200)
        .json({ status: 'Success', message: 'Form submitted successfully' });
    } catch (error) {
      console.error(error);
      if (error.response) {
        const { message, code, response } = error;
        const { headers, body } = response;

        console.error(body);
        res.status(500).json({ status: 'Error', message: body });
      } else {
        res
          .status(500)
          .json({ status: 'Error', message: 'Form submission failed' });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
