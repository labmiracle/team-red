import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();
const password = process.env.paradigm_api__sendmail__key;
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "gastonfalena@gmail.com",
        pass: `${password}`,
    },
});

export default transporter;
