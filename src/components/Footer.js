import React, { useState } from 'react';
import './Footer.css';
import emailjs from 'emailjs-com';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all fields.');
            return;
        }

        const serviceID = 'service_0hjpjga';
        const templateID = 'template_gdooqug';
        const userID = 'yiM67ClpvYk1hrOl4';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((result) => {
                setIsSent(true);
                setError('');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                setError('Failed to send message. Please try again.');
            });
    };

    return (
        <footer className="footer" id="contact">
            
            
            {/* Contact Form Section */}
            <div className="contact-form-footer">
                <h3>Contact Me</h3>
                <form onSubmit={sendEmail}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                    {error && <p className="error-message">{error}</p>}
                    {isSent && <p className="success-message">Your message has been sent successfully!</p>}
                </form>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
                <p>Email: <a href="mailto:ajisha25@gmail.com">ajisha25@gmail.com</a></p>

                <div className="social-media">
                    <p>Connect with me:</p>
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
            <p>© 2024 AJISHA. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
