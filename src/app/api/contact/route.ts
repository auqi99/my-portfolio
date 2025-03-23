import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Semua field harus diisi" },
        { status: 400 },
      );
    }

    console.log("Menerima request dengan data:", { name, email, message });

    // Konfigurasi SMTP Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Ambil dari .env.local
        pass: process.env.EMAIL_PASS, // Ambil dari .env.local
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`, // Nama pengirim
      to: "auqi1026@gmail.com", // Ganti dengan email tujuan
      subject: `Pesan dari ${name}`,
      text: `Nama: ${name}\nEmail: ${email}\nPesan:\n${message}`,
    };

    // Kirim email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email terkirim:", info.messageId);

    return NextResponse.json({ message: "Email berhasil dikirim" });
  } catch (error) {
    console.error("Gagal mengirim email:", error);
    return NextResponse.json(
      { error: "Gagal mengirim email" },
      { status: 500 },
    );
  }
}
