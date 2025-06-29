'use client';

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("✅ Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Error: " + result.message);
      }
    } catch (error) {
      setStatus("❌ Error: Failed to send message.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-purple-300 px-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-purple-700 text-center">Contact Us</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border border-purple-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          type="email"
          className="border border-purple-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="border border-purple-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center text-sm text-gray-600">{status}</p>
        )}
      </form>
    </div>
  );
}
