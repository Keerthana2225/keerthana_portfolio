import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from 'lucide-react';
import { motion } from "framer-motion";
import profilePic from "../assets/profile.png";
import resume from "../assets/pdf/KEERTHANA R _RESUME _NEW.pdf";

const Hero = () => {
    const stats = [
        { value: "3+", label: "Years of Learning" },
        { value: "8.14", label: "CGPA" },
        { value: "10+", label: "Projects" },
        { value: "5+", label: "Certifications" },
    ];

    return (
        <section id="about" className="min-h-screen flex items-center relative overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[var(--primary)] opacity-20 blur-3xl floating"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[var(--secondary)] opacity-15 blur-3xl floating" style={{ animationDelay: '-3s' }}></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-gray-400 mb-4 font-medium"
                            >
                                This is Keerthana's Page!
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
                            >
                                <span className="text-white">AI Engineer</span>
                                <br />
                                <span className="gradient-text">& ML Developer</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-300 leading-relaxed max-w-xl"
                            >
                                With 3+ years of experience in transforming complex data into intelligent solutions through Machine Learning and Computer Vision.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button
                                className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:opacity-90 text-white px-8 py-6 text-lg rounded-xl font-semibold neon-glow group"
                                asChild
                            >
                                <a href="#projects">
                                    View Work
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>

                            <Button
                                variant="outline"
                                className="glassmorphism hover:neon-border px-8 py-6 text-lg rounded-xl font-semibold"
                                asChild
                            >
                                <a href={resume} target="_blank" rel="noreferrer">
                                    <Download size={20} className="mr-2" />
                                    Download CV
                                </a>
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative max-w-sm w-full">
                            {/* Neon Frame Effect */}
                            <div className="absolute -inset-4 rounded-3xl neon-border"></div>

                            {/* Image */}
                            <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
                                <img
                                    src={profilePic}
                                    alt="Keerthana R"
                                    className="w-full h-full object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60"></div>
                            </div>              </div>

                        {/* Floating Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-4 -left-4 glassmorphism p-4 rounded-2xl neon-glow"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                <div>
                                    <div className="text-xs text-gray-400">Status</div>
                                    <div className="font-bold">Available for Work</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
