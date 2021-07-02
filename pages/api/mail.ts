import type { NextApiRequest, NextApiResponse } from "next";
const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENGRID_API_KEY);

type Data = {
	email: "";
	subject: "";
	message: "";
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const body = JSON.parse(req.body);

	const message = `
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}\r\n
  `;

	const data = {
		to: "tomas.solano.sanchez@gmail.com",
		from: "tomas.solano.sanchez@icloud.com",
		subject: "Portfolio form",
		text: message,
		html: message.replace(/\r\n/g, "<br>"),
	};
	console.log(process.env.SENGRID_API_KEY);
	try {
		mail.send(data);
		res.status(200).json({
			email: body.email,
			subject: body.subject,
			message: body.message,
		});
		console.log("sent");
	} catch (error) {
		console.error(error);
	}
};
