"use client";

import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { name: "", email: "", message: "" };

    if (!name.trim()) newErrors.name = "Nama tidak boleh kosong";
    if (!email.trim()) newErrors.email = "Email tidak boleh kosong";
    if (message.trim().split(" ").length < 10)
      newErrors.message = "Pesan tidak boleh kurang dari sepuluh kata";

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setLoading(true);
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });

        const data = await res.json();
        if (res.ok) {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          console.error("Gagal mengirim pesan:", data.error);
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="flex min-h-screen items-center justify-center bg-blue-950 px-4"
    >
      <div className="mt-16 w-full max-w-md rounded-lg bg-black p-7 shadow-lg sm:px-10 md:px-16">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-300">
          Hi !!!
        </h1>
        <p className="mb-4 text-center text-gray-300">
          Ready to start something great? Let's make it happen!
        </p>
        {success && (
          <p className="mb-4 text-center text-green-500">
            Pesan berhasil dikirim!
          </p>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-400">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">
              Your message
            </label>
            <textarea
              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              placeholder="Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
