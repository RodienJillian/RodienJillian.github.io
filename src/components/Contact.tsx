import { Mail, Github, Linkedin, Twitter, Phone, Facebook, Instagram } from 'lucide-react';
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, href: 'mailto:jillianellorando@gmail.com', label: 'Gmail', text: 'jillianellorando@gmail.com' },
    { icon: Phone, href: 'tel:09948117906', label: 'Phone', text: '0994 811 7906' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/RodienJillian', label: 'GitHub' },
    { icon: Facebook, href: 'https://www.facebook.com/rodienjillian.ellorando', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/jilliscious/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rodien-jillian-ellorando-a15b12358/', label: 'LinkedIn' },
  ];

  // ✅ STATE (moved here)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_n2mwn9y",
        "template_6ccj9oe",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "MywSVWqa4O-7i_Cqf"
      );

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden border-t border-border">
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 space-y-3">
            <p className="text-primary text-sm font-semibold tracking-wide">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Let's Connect!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have something on your mind? Send me a message! I’d love to hear from you.
            </p>
          </div>

          {/* ✅ YOUR ORIGINAL FORM (just connected) */}
          <div className="bg-card rounded-2xl shadow-medium border border-border p-6 md:p-12 mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none text-foreground"
                  placeholder="Share your thoughts, questions, or concerns…"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-12 py-3 bg-gradient-to-r from-primary to-dark-red text-white font-medium rounded-full shadow-red-glow hover:shadow-medium transition-all transform hover:-translate-y-1"
              >
                Send Message
              </button>

              {status && (
                <p className="text-sm text-foreground">{status}</p>
              )}

            </form>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a key={index} href={contact.href} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                    <Icon size={20} />
                    <div>
                      <div className="text-xs text-muted-foreground">{contact.label}</div>
                      <div>{contact.text}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-muted-foreground font-medium">Connect with me</p>
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-card border border-border rounded-lg">
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
