import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* Desktop/Mobile Header */}
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glassmorphism' : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="h-20 flex items-center justify-between">
                        {/* Logo */}
                        <a href="#" className="text-2xl font-bold gradient-text">
                            Keerthana R
                        </a>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}
                        </nav>

                        {/* Social Links - Desktop */}
                        <div className="hidden md:flex items-center gap-4">
                            <a href="https://github.com/Keerthana2225" target="_blank" rel="noreferrer"
                                className="p-2 rounded-lg glassmorphism hover:neon-glow transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/RKeerthana2005" target="_blank" rel="noreferrer"
                                className="p-2 rounded-lg glassmorphism hover:neon-glow transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="md:hidden fixed inset-0 z-40 glassmorphism"
                    >
                        <nav className="flex flex-col items-center justify-center h-full gap-8">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-bold hover:gradient-text transition-all"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                            <div className="flex gap-6 mt-8">
                                <a href="https://github.com/Keerthana2225" target="_blank" rel="noreferrer"
                                    className="p-4 rounded-lg glassmorphism hover:neon-glow transition-all">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/RKeerthana2005" target="_blank" rel="noreferrer"
                                    className="p-4 rounded-lg glassmorphism hover:neon-glow transition-all">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
