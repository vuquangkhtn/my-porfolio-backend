const nodemailer = require('nodemailer');

const thankYouEmailText = (name) => {
	return `
Dear ${name},
I have received your message and would like to thank you for writing to me. 
If your inquiry is urgent, please use the telephone number listed below to talk to me directly. 

Otherwise, I will reply by email as soon as possible.

Talk to you soon,
Quang Vu Nguyen
(+84)38 7708 009
`;
};

const porfolioText = ({ name, email, description }) => {
	return `
You have a notification from Porfolio website:
Name: ${name}
Email: ${email},
description: ${description} 
	`;
};

const sendEmail = (sender, receiver, title, content) => {
	return new Promise((resolve, reject) => {
		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: sender.email,
				pass: sender.password
			}
		});
		var mailOptions = {
			from: sender.email,
			to: receiver.email,
			subject: title,
			text: content
		};

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log('mail err', error);
				reject(false);
			} else {
				console.log('Email sent: ' + info.response);
				resolve(true);
			}
		});
	});
};

const sendNotificationEmail = (receiver) => {
	return sendEmail(
		{ email: process.env.SYSTEM_EMAIL_USERNAME, password: process.env.SYSTEM_EMAIL_PASSWORD },
		{ email: process.env.ADMIN_EMAIL_USERNAME },
		"You have a notification from Porfolio website",
		porfolioText(receiver)
	);
};

const sendThankEmail = (sender, receiver) => {
	return sendEmail(sender, receiver, "Thank you for getting in touch!", thankYouEmailText(receiver.name));
};

module.exports = {
	sendThankEmail,
	sendNotificationEmail,
};