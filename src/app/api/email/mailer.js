import nodeMailer from "nodemailer";
import smtp from "nodemailer-smtp-transport";

const Transporter = nodeMailer.createTransport(
  smtp({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth: {
      user: 'classmodoapp@gmail.com',
      pass: 'wa72SEQN4WsfH39C',
    },
  })
);

const send = async ({ eventData }) => {
  let html = `<div>eventData: ${eventData}</div>`;
  let mailOptions = {
    from: "EmailLogs" + "<dengokul@gmail.com>",
    to: "dengokul@gmail.com",
    subject: "EmailLogs Test",
    html
  };

  let result = await Transporter.sendMail(mailOptions);

  return result;
}

export default send;