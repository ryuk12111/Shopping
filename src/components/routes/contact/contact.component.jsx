import React, { useState, useEffect } from 'react';
import {
  auth,
  onAuthStateChangedListener,
  saveContactMessage,
} from '../../utils/firebase/firebase.utils'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // Listen to auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(setCurrentUser);
    return unsubscribe;
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setFormStatus("All fields are required!");
      return;
    }

    if (!currentUser) {
      setFormStatus("Please sign in to send a message.");
      return;
    }

    try {
      await saveContactMessage(currentUser.uid, formData);
      setFormStatus("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="bg-pink-100 min-h-screen py-10 px-4 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl max-w-2xl w-full p-8">
        <h2 className="mb-4 text-4xl font-bold text-center text-pink-600">Contact Us</h2>
        <p className="mb-8 text-center text-gray-600">
          Got a technical issue? Feedback? Let us know.
        </p>

        {formStatus && (
          <div className={`text-center font-medium mb-4 ${formStatus.includes("successfully") ? 'text-green-600' : 'text-red-600'}`}>
            {formStatus}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full p-3 border border-pink-300 rounded-lg bg-pink-50"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full p-3 border border-pink-300 rounded-lg bg-pink-50"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              className="mt-1 w-full p-3 border border-pink-300 rounded-lg bg-pink-50"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              rows="5"
              className="mt-1 w-full p-3 border border-pink-300 rounded-lg bg-pink-50"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
