import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../assets/sinsha.jpg'; // Replace with your image path

const Home = () => {
  const socialLinks = [
    { icon: faGithub, color: 'hover:text-gray-300', url: 'https://github.com/shinsha08' },
    { icon: faLinkedin, color: 'hover:text-blue-400', url: 'https://www.linkedin.com/in/sinshaprakashpk?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/' },
    { icon: faInstagram, color: 'hover:text-pink-400', url: 'https://www.instagram.com/yourusername/' },
    { icon: faFacebook, color: 'hover:text-blue-400', url: 'https://www.facebook.com/yourusername' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a192f] to-[#1e2a38] p-8">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl text-center max-w-4xl w-full transform transition-all duration-300 hover:shadow-blue-500/20">
        <div className="relative mb-12">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 blur opacity-75 animate-pulse"></div>
          <img
            src={profileImage}
            alt="Profile"
            className="relative w-64 h-64 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
          />
        </div>
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 mb-6">
          Hello, I'm Sinsha Prakash P K
        </h1>
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          I am a dedicated and passionate software engineer with a strong foundation in coding and problem-solving. My journey in the tech world has been driven by curiosity, continuous learning, and a desire to innovate.
        </p>
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          With a keen interest in exploring new technologies and refining my skills, I am committed to building efficient, scalable, and impactful solutions. I thrive in collaborative environments and am eager to contribute to meaningful projects.
        </p>
        <p className="text-2xl font-semibold text-purple-400 mb-12">
          I am always exploring new opportunities.
        </p>
        <h2 className="text-3xl font-bold text-gray-200 mb-8">Connect with me:</h2>
        <div className="flex justify-center space-x-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${social.color} transform hover:scale-125 transition-all duration-300`}
            >
              <FontAwesomeIcon icon={social.icon} size="3x" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
