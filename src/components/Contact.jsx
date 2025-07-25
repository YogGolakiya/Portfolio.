// src/components/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError(false);

    emailjs
      .sendForm(
        "service_pbw4dau",              
        "template_2h1qanj",             
        formRef.current,
        "FB_BBxMZwyv9PFJ1A"             
      )
      .then(
        () => {
          setTimeout(() => {
            setSent(true);
            setLoading(false);
            formRef.current.reset();
          }, 2000);
        },
        (err) => {
          console.error("FAILED...", err);
          setLoading(false);
          setError(true);
          alert("Failed to send. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20 font-poppins overflow-hidden">
      {/* Loader Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex space-x-2"
              initial={{}}
              animate={{}}
            >
              <span className="h-3 w-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="h-3 w-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="h-3 w-3 bg-white rounded-full animate-bounce"></span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto space-y-6 bg-gray-900 p-8 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
        ></textarea>

        <motion.button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded w-full font-semibold flex items-center justify-center gap-3"
          whileTap={{ scale: 0.97 }}
        >
          {loading ? "Sending..." : sent ? "Sent ✅" : "Send Message"}
        </motion.button>

        {sent && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-green-400 bg-green-900/20 py-3 rounded font-medium shadow-inner mt-4"
          >
            🎉 Thanks for reaching out! I’ll get back to you shortly.
          </motion.p>
        )}

        {error && (
          <p className="text-red-400 text-center font-medium mt-4">
            Oops! Something went wrong.
          </p>
        )}
      </form>
    </section>
  );
}
