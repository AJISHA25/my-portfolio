import React from 'react';
import './ProjectGallery.css';
import image from '../components/image/image.png';
import pro2 from '../components/image/pro2.png';
import pro4 from '../components/image/pro4.png';
import pro5 from '../components/image/pro5.png';

const ProjectGallery = () => {
    const projects = [
        { 
            title: 'Portfolio Website',
            description: 'A sleek, personal portfolio website showcasing my skills, projects, and professional journey with a focus on creativity, expertise, and seamless user experience.',
            link: 'https://github.com/AJISHA25/react-pro/blob/main/portfolio.html',
            image: image, // Local image path
            githubImage: 'https://github.com/AJISHA25/react-pro/blob/main/port1.png' // GitHub image URL
        },
        {
            title: 'ToDo App',
            description: 'A simple and intuitive to-do app designed to help you organize tasks, set priorities, and boost productivity effortlessly.',
            link: 'https://github.com/AJISHA25/react-pro/blob/main/to-do.html',
            image: pro2,
            githubImage: 'https://github.com/AJISHA25/react-pro/blob/main/to-do1.png'
        },
        {
            title: 'Weather App',
            description: 'A user-friendly weather app providing real-time forecasts, detailed conditions, and alerts to keep you prepared for any weather.',
            link: 'https://github.com/AJISHA25/react-pro/blob/main/weather.html',
            image: pro4,
            githubImage: 'https://github.com/AJISHA25/react-pro/blob/main/weather1.png'
        },
        {
            title: 'E-Commerce Site',
            description: 'e-commerce site offering a wide range of quality products, seamless shopping experience, and secure payment options for a convenient online purchase journey.',
            link: 'https://github.com/AJISHA25/react-pro/blob/main/ecom.html',
            image: pro5,
            githubImage: 'https://github.com/AJISHA25/react-pro/blob/main/commerce1.png'
        }
    ];

    const viewGitHubImage = (imageUrl) => {
        window.open(imageUrl, '_blank'); // Open the image in a new tab
    };

    return (
        <div className="project-gallery">
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        View source
                    </a>
                    <button 
                        onClick={() => viewGitHubImage(project.githubImage)} 
                        className="view-image-button">
                        View Project Image
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProjectGallery;
