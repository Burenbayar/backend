import nodemailer from 'nodemailer';

export const sendBookingEmail = async (to: string, bookingId: number): Promise<void> => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // STARTTLS ашиглана
    auth: {
      user: process.env.OUTLOOK_USER!,
      pass: process.env.OUTLOOK_PASS!,
    },
    tls: {
      ciphers: 'SSLv3',
    },
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: `"Travel App" <${process.env.OUTLOOK_USER}>`,
    to,
    subject: 'Аяллын захиалга баталгаажлаа',
    html: `
      <div style="font-family: sans-serif;">
        <h2>Таны захиалга амжилттай хийгдлээ</h2>
        <p>Захиалгын дугаар: <strong>#${bookingId}</strong></p>
        <p>Баярлалаа!</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
