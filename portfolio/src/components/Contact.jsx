import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUp, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="py-24 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--primary)] opacity-10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--secondary)] opacity-10 blur-3xl rounded-full"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                            Let's <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            I'm currently available for new opportunities. Let's build something amazing together!
                        </p>
                    </div>

                    {/* Two-column layout: contact cards (left) + form (right) */}
                    <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                        <div>
                            <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                <a
                                    href="mailto:keerthanarajaram255@gmail.com"
                                    className="glassmorphism p-6 rounded-2xl hover:neon-glow transition-all group text-center"
                                >
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail size={24} className="text-white" />
                                    </div>
                                    <div className="text-sm text-gray-400 mb-2">Email</div>
                                    <div className="font-semibold text-white group-hover:gradient-text transition-all">
                                        keerthanarajaram255@gmail.com
                                    </div>
                                </a>

                                <a
                                    href="tel:8148351588"
                                    className="glassmorphism p-6 rounded-2xl hover:neon-glow transition-all group text-center"
                                >
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Phone size={24} className="text-white" />
                                    </div>
                                    <div className="text-sm text-gray-400 mb-2">Phone</div>
                                    <div className="font-semibold text-white group-hover:gradient-text transition-all">
                                        +91 8148351588
                                    </div>
                                </a>
                            </div>

                            <div className="glassmorphism p-6 rounded-2xl text-center mb-6">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--primary)] flex items-center justify-center">
                                    <MapPin size={24} className="text-white" />
                                </div>
                                <div className="text-sm text-gray-400 mb-2">Location</div>
                                <div className="font-semibold text-white">
                                    Maduranthakam, India
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 justify-center sm:justify-start mb-6">
                                <a
                                    href="https://github.com/Keerthana2225"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="glassmorphism p-4 rounded-xl hover:neon-glow transition-all"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/RKeerthana2005"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="glassmorphism p-4 rounded-xl hover:neon-glow transition-all"
                                >
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Contact form */}
                        <ContactForm />
                    </div>

                    {/* Footer Bottom */}
                    <div className="flex flex-col items-center gap-4 pt-8 border-t border-white/10 text-gray-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} Keerthana R. Crafted with 💜</p>
                        <Button
                            onClick={scrollToTop}
                            variant="ghost"
                            className="glassmorphism hover:neon-border gap-2"
                        >
                            <ArrowUp size={16} />
                            Back to Top
                        </Button>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Contact;


/* ContactForm component placed at bottom to keep file self-contained */
const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const to = 'keerthanarajaram255@gmail.com';
        const subject = `Contact from ${name || 'Website Visitor'}`;
        const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`;

        // Gmail compose URL
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open in a new tab
        window.open(gmailLink, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className="glassmorphism p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-white">Send a Message</h3>

            <label className="block mb-3">
                <span className="text-sm text-gray-300">Name</span>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="mt-1 w-full px-3 py-2 rounded-lg bg-white/5 text-white outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
            </label>

            <label className="block mb-3">
                <span className="text-sm text-gray-300">Email</span>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-1 w-full px-3 py-2 rounded-lg bg-white/5 text-white outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
            </label>

            <label className="block mb-4">
                <span className="text-sm text-gray-300">Message</span>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    placeholder="Write your message here..."
                    className="mt-1 w-full px-3 py-2 rounded-lg bg-white/5 text-white outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                />
            </label>

            <div className="flex items-center gap-3">
                <Button type="submit" className="flex items-center gap-2" variant="default">
                    <Send size={16} />
                    Send Message
                </Button>
                <span className="text-sm text-gray-400">Or email directly at <a className="text-white font-semibold" href="mailto:keerthanarajaram255@gmail.com">keerthanarajaram255@gmail.com</a></span>
            </div>
        </form>
    );
};
