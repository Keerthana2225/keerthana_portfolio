import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from "framer-motion";
import triosPdf from "../assets/pdf/Trios intern.pdf";
import prodigyPdf from "../assets/pdf/prodigy online intern.pdf";
import cognifyzPdf from "../assets/pdf/cognifyz onlin intern in machine learng .pdf";

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="glassmorphism p-8 lg:p-10 rounded-3xl neon-glow relative overflow-hidden group">
                        {/* Decorative gradient */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] neon-glow">
                                    <Briefcase size={28} className="text-white" />
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Calendar size={16} />
                                    <span>August 2024</span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold mb-2 text-white">Internship Trainee</h3>
                            <p className="text-xl gradient-text font-semibold mb-6">TRIOS TECHNOLOGIES PVT</p>

                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                Worked on Machine Learning applications for IoT-based solutions. Focused on data preprocessing, model optimization, and real-time integration with embedded systems.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-4">
                                {["IoT", "Python", "Scikit-learn", "Embedded Systems"].map(skill => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 glassmorphism rounded-lg text-sm font-medium text-gray-300 hover:neon-border transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 mt-4">
                                <a href={triosPdf} target="_blank" rel="noreferrer" className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg font-semibold hover:opacity-90">
                                    View Trio Certificate
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Prodigy Online Intern (Feb 2025) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mt-8"
                >
                    <div className="glassmorphism p-8 lg:p-10 rounded-3xl neon-glow relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] neon-glow">
                                    <Briefcase size={28} className="text-white" />
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Calendar size={16} />
                                    <span>February 2025</span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold mb-2 text-white">ML Intern</h3>
                            <p className="text-xl gradient-text font-semibold mb-6">Prodigy (Online)</p>

                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                Worked as a Machine Learning intern focusing on model development, evaluation and deployment-ready pipelines. Implemented end-to-end experiments and produced documented results.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-4">
                                {["Machine Learning", "Python", "Pandas", "Model Evaluation"].map(skill => (
                                    <span key={skill} className="px-4 py-2 glassmorphism rounded-lg text-sm font-medium text-gray-300 hover:neon-border transition-all cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 mt-4">
                                <a href={prodigyPdf} target="_blank" rel="noreferrer" className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg font-semibold hover:opacity-90">
                                    View Prodigy Certificate
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Cognifyz Online Intern (Apr - May 2024) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mt-8"
                >
                    <div className="glassmorphism p-8 lg:p-10 rounded-3xl neon-glow relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] neon-glow">
                                    <Briefcase size={28} className="text-white" />
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Calendar size={16} />
                                    <span>Apr — May 2024</span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold mb-2 text-white">ML Intern</h3>
                            <p className="text-xl gradient-text font-semibold mb-6">Cognifyz (Online)</p>

                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                Contributed to machine learning experiments and prototype implementations. Focused on data cleaning, feature engineering and baseline model training.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-4">
                                {["Data Cleaning", "Feature Engineering", "Python", "Scikit-learn"].map(skill => (
                                    <span key={skill} className="px-4 py-2 glassmorphism rounded-lg text-sm font-medium text-gray-300 hover:neon-border transition-all cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 mt-4">
                                <a href={cognifyzPdf} target="_blank" rel="noreferrer" className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg font-semibold hover:opacity-90">
                                    View Cognifyz Certificate
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
