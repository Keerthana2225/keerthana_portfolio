import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { motion } from "framer-motion";

const Education = () => {
    const education = [
        {
            degree: "B.Tech - AI & Data Science",
            institution: "Karpaga Vinayaga College of Engineering",
            location: "Chengalpattu, India",
            year: "2022 – 2026",
            score: "8.14",
            scoreLabel: "CGPA"
        },
        {
            degree: "Higher Secondary Education",
            institution: "Government Girls Higher Secondary School",
            location: "Madurantakam, India",
            year: "2021 – 2022",
            score: "80.3%",
            scoreLabel: "Score"
        }
    ];

    return (
        <section id="education" className="py-24 relative">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        <span className="gradient-text">Education</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glassmorphism p-8 rounded-3xl hover:neon-glow transition-all relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-10 blur-3xl transition-opacity"></div>

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] neon-glow">
                                        <GraduationCap size={28} className="text-white" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-4xl font-black gradient-text">{edu.score}</div>
                                        <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{edu.scoreLabel}</div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                                <p className="text-lg gradient-text font-semibold mb-4">{edu.degree}</p>

                                <div className="space-y-2 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} />
                                        <span>{edu.location}</span>
                                    </div>
                                    <div className="font-medium">{edu.year}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
