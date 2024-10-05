// src/pages/MainPage.js
import React from 'react';
import './MainPage.css';
import ProjectGallery from '../components/ProjectGallery';

const MainPage = () => {
    return (
        <div>
            {/* Home Section */}
            <section id="home" className="section">
                <h1>Welcome to My Portfolio</h1>
                <p>Hello and welcome! I’m thrilled to have you here. This portfolio is a reflection of my journey as a web developer, showcasing my skills, projects, and passion for crafting beautiful, functional, and user-friendly applications.</p>
            </section>

            {/* About Me Section */}
    
            <section id="about" className="section">
                <h2>About Me</h2>
                <p>Hi, I'm AJISHA, a front-end developer with a strong focus on creating user-friendly and visually appealing web applications. I have a passion for learning new technologies and improving my skills every day.</p>
            </section>

            {/* Skills Section */}
        
            <section id="skills" className="section">
                <h2>Skills</h2>
                <br></br> <br></br>
                <div className="skills-container">
                    <div className="skill-card">HTML & CSS</div>
                    <div className="skill-card">JavaScript</div>
                    <div className="skill-card">React.js</div>
                    <div className="skill-card">Node.js</div>
                    <div className="skill-card">Git & GitHub</div>
                    <div className="skill-card">Responsive Design</div>
                </div>
            </section>

            {/* Projects Section with Project Gallery */}
            <section id="projects" className="section">
                <h2>Projects</h2>
                <ProjectGallery />
            </section>
        </div>
    );
};

export default MainPage;
