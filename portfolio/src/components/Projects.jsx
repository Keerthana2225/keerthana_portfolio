import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Code2 } from 'lucide-react';
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            title: "Multi-Disease Prediction Dashboard",
            description: "Comprehensive health analytics platform with ML algorithms for diabetes, heart disease, and kidney failure prediction.",
            tags: ["Python", "Streamlit", "Scikit-Learn", "Pandas"],
            gradient: "from-purple-600 to-blue-600"
        },
        {
            title: "Plant Disease AI Diagnosis",
            description: "Deep learning CNN solution for real-time plant disease detection from leaf imagery with treatment recommendations.",
            tags: ["PyTorch", "Deep Learning", "CNN", "OpenCV"],
            gradient: "from-blue-600 to-cyan-600"
        },
        {
            title: "Smart Face Recognition System",
            description: "IoT-enabled attendance automation on Raspberry Pi with real-time facial detection and recognition.",
            tags: ["OpenCV", "IoT", "Raspberry Pi", "Python"],
            gradient: "from-cyan-600 to-teal-600"
        }
        ,
        {
            title: "Lucky Assistant — AI Chatbot",
            description: "AI-based chatbot 'Lucky Assistant' to learn general topics and Python interactively with examples and exercises.",
            tags: ["NLP", "Chatbot", "Python", "Interactive"],
            gradient: "from-pink-500 to-indigo-500",
            link: "#"
        },
        {
            title: "Vehicle Monitor System (YOLO)",
            description: "Real-time vehicle monitoring using YOLO object detection for security, camera stream integration and anomaly alerts.",
            tags: ["YOLO", "Computer Vision", "Real-time", "OpenCV"],
            gradient: "from-yellow-500 to-red-500",
            link: "#"
        },
        {
            title: "Career Path LMS",
            description: "Learning Management System that recommends career paths, tracks progress, and delivers curated learning modules.",
            tags: ["React", "Node.js", "MongoDB", "Recommendation"],
            gradient: "from-green-500 to-emerald-500",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glassmorphism p-6 rounded-3xl group hover:neon-glow transition-all cursor-pointer relative overflow-hidden"
                        >
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 neon-glow`}>
                                    <Code2 size={24} className="text-white" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:gradient-text transition-all">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 rounded-lg text-gray-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {project.link ? (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="w-full block">
                                        <Button variant="ghost" className="w-full glassmorphism hover:neon-border group/btn font-semibold">
                                            View Project
                                            <ArrowUpRight className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </Button>
                                    </a>
                                ) : (
                                    <Button variant="ghost" className="w-full glassmorphism hover:neon-border group/btn font-semibold">
                                        View Project
                                        <ArrowUpRight className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
