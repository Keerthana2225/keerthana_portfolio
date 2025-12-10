import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Certifications from './Certifications';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';

const CreatePortfolio = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Certifications />
            </main>
            <Contact />
        </div>
    );
};

export default CreatePortfolio;
