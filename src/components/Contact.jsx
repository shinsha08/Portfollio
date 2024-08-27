import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9vojq1k', 'template_g3l0yap', form.current, {
        publicKey: 'oZeM6LyK_jHFO3mYU',
      })
      .then(
        () => {
          setFeedbackMessage('Your message has been sent successfully!');
          form.current.reset(); // Optionally clear the form after success
        },
        (error) => {
          setFeedbackMessage(`Failed to send message: ${error.text}`);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact </h2>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Name:</label>
            <input
              type="text"
              name="user_name"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="user_email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Message:</label>
            <textarea
              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>

          {feedbackMessage && (
            <div className="mt-4 text-center text-gray-700">
              {feedbackMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
