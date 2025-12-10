import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { motion } from "framer-motion";

// Import PDFs
import courseraML from "../assets/pdf/Coursera Supervised Machine Learning Regression and Classification.pdf";
import courseraAlgo from "../assets/pdf/cousera Advanced Learning Algorithms.pdf";
import pythonFund from "../assets/pdf/Greatlearing -pyhton fundamenta.pdf";
import sqlBasics from "../assets/pdf/Greatlearning_MY_sql basics.pdf";
import faceRec from "../assets/pdf/greatlearing face recongtion in open cv.pdf";
import hackathonRunner from "../assets/pdf/Hackathon runner.pdf";
import hackathonParticipation from "../assets/pdf/inter colleg smart india hackathon first.pdf";
import pythonML from "../assets/pdf/python for machine learing.pdf";
import udemy from "../assets/pdf/KEERTHANA R_UDEMY COURSE_complete data sceint ,ml,dl .pdf";
import internship from "../assets/pdf/Trios intern.pdf";

const Certifications = () => {
    const certs = [
        { title: "Supervised Machine Learning", issuer: "Coursera", file: courseraML },
        { title: "Advanced Learning Algorithms", issuer: "Coursera", file: courseraAlgo },
        { title: "Data Science Bootcamp", issuer: "Udemy", file: udemy },
        { title: "Trios Internship", issuer: "Trios Tech", file: internship },
        { title: "Hackathon Runner Up", issuer: "Hackathon", file: hackathonRunner },
        { title: "SIH Participation", issuer: "SIH", file: hackathonParticipation },
        { title: "Face Recognition", issuer: "Great Learning", file: faceRec },
        { title: "Python for ML", issuer: "Great Learning", file: pythonML },
        { title: "SQL Basics", issuer: "Great Learning", file: sqlBasics },
        { title: "Python Fundamentals", issuer: "Great Learning", file: pythonFund },
    ];

    return (
        <section id="certifications" className="py-24 relative">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        <span className="gradient-text">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
                    <p className="text-gray-400 mt-4 text-lg">
                        Professional credentials and completed courses
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {certs.map((cert, index) => (
                        <motion.a
                            href={cert.file}
                            target="_blank"
                            rel="noreferrer"
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glassmorphism p-6 rounded-2xl group hover:neon-glow transition-all cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] group-hover:scale-110 transition-transform">
                                    <FileText size={20} className="text-white" />
                                </div>
                                <ExternalLink size={16} className="text-gray-500 group-hover:text-[var(--primary)] transition-colors" />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:gradient-text transition-all">
                                {cert.title}
                            </h3>
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                                {cert.issuer}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
