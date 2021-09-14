import { send, init } from "emailjs-com";

const keys = {
	USER_ID: `user_HMLkCSe9Eegtrk8Db2u7n`,
	TEMPLATE_ID: `template_gibixnc`,
	SERVICE_ID: `service_64wmtwg`,
};

type contentType = {
	email: string;
	subject: string;
	message: string;
};

const sendEmail = async (content: contentType) => {
	init(keys.USER_ID);
	console.log("This ran from emailkeys");
	const toSend = {
		subject: content.subject,
		from_email: content.email,
		message: content.message,
	};
	const response = await send(keys.SERVICE_ID, keys.TEMPLATE_ID, toSend)
		.then((res) => {
			console.log(res);
			return true;
		})
		.catch((err) => {
			console.log(err);
		});
	return response;
};

export default { sendEmail };
