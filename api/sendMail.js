import nodemailer from "nodemailer"

export default async function handler(req, res) {
    if (req.method !== "POST"){
        return res.status(405).send({ message: "Méthode non autorisée "});
    }

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "andonomeny1@gmail.com",
            
        }
    })
}