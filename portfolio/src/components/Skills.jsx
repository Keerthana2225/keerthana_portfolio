import React from 'react';
import { Code, Cpu, Database, Layers } from 'lucide-react';
import { motion } from "framer-motion";

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming",
            icon: <Code size={24} />,
            skills: ["Python", "SQL", "HTML/CSS"],
            color: "from-purple-600 to-pink-600"
        },
        {
            title: "AI & ML",
            icon: <Cpu size={24} />,
            skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "Keras", "Pandas", "Llama", "GenAI"],
            color: "from-blue-600 to-purple-600"
        },
        {
            title: "Core Skills",
            icon: <Layers size={24} />,
            skills: ["Deep Learning", "Computer Vision", "Data Structures", "OOP", "GenAI"],
            color: "from-cyan-600 to-blue-600"
        },
        {
            title: "Tools",
            icon: <Database size={24} />,
            skills: ["Git", "MySQL", "VS Code", "Raspberry Pi", "Jupyter", "Streamlit", "Cursor"],
            color: "from-teal-600 to-cyan-600"
        }
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        Skills & <span className="gradient-text">Technologies</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glassmorphism p-8 rounded-3xl group hover:neon-glow transition-all relative overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map(skill => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-white/5 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
