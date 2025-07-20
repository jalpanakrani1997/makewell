import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // You can add backend integration here
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-[#2E3192] mb-4 text-center">Contact Us</h1>
      <div className="bg-white rounded-xl shadow-lg p-8">
        {submitted ? (
          <div className="text-center text-green-600 font-semibold text-lg">Thank you for contacting us!</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E3192]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E3192]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E3192]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#a16794] to-[#4d4f96] text-white font-bold py-2 rounded-md shadow hover:from-[#2E3192] hover:to-[#A1468C] transition-all"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
