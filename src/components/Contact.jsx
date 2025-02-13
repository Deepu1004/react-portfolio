import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  XCircle,
  MessageSquare,
} from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm(
        "service_unrq6ml",
        "template_2bwig1m",
        form,
        "ei5KoUhH2qx4QmHR5",
      )
      .then(
        () => {
          setStatus({ message: "Message sent successfully!", type: "success" });
          form.reset();
          setTimeout(() => setStatus({ message: "", type: "" }), 5000);
        },
        () => {
          setStatus({
            message: "Failed to send message. Please try again.",
            type: "error",
          });
          setTimeout(() => setStatus({ message: "", type: "" }), 5000);
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent inline-block mb-4">
            Get In Touch
          </h2>
          <br />
          <div className="inline-flex items-center px-4 py-2 bg-blue-100/50 rounded-full text-blue-700 text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Let's Talk
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always excited to connect with fellow developers, potential
            collaborators, and anyone interested in innovative tech solutions.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Let's create something
                amazing together!
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:varanasisaideepak@gmail.com"
                  className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-colors p-4 rounded-xl hover:bg-blue-50 group"
                >
                  <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <span className="font-medium">
                    varanasisaideepak@gmail.com
                  </span>
                </a>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/Deepu1004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-all duration-300 group"
                  >
                    <Github size={24} />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/saideepakvaranasi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-all duration-300 group"
                  >
                    <Linkedin size={24} />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-gray-100"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25 font-medium"
            >
              Send Message
              <Send className="ml-2" size={20} />
            </button>

            {status.message && (
              <div
                className={`p-4 rounded-xl text-lg flex items-center gap-3 ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle size={24} />
                ) : (
                  <XCircle size={24} />
                )}
                <p>{status.message}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
