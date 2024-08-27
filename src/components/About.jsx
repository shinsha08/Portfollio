import React from 'react';
import { FaUserTie, FaBullseye, FaBriefcase } from 'react-icons/fa';

const SectionTitle = ({ icon, title }) => (
  <div className="flex items-center mb-6">
    {icon}
    <h3 className="text-3xl font-bold text-white ml-3">{title}</h3>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12 text-center tracking-tight">
          About Me
        </h2>

        {/* Career Objective Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-xl mb-12 transform hover:scale-105 transition duration-300">
          <SectionTitle icon={<FaBullseye className="text-3xl text-blue-400" />} title="Career Objective" />
          <p className="text-lg text-gray-300 leading-relaxed">
            To secure a challenging and responsible position in a dynamic organization where I can contribute to business growth and achieve personal and professional development. I aim to leverage my skills and capabilities to make a positive impact, advance my career, and deliver substantial results as a valuable team member.
          </p>
        </div>

        {/* About Me Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-xl mb-12 transform hover:scale-105 transition duration-300">
          <SectionTitle icon={<FaUserTie className="text-3xl text-purple-400" />} title="About Me" />
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I am a passionate Frontend Developer with a strong foundation in building scalable and efficient web applications. I specialize in front-end development with a focus on creating seamless user experiences and robust application architectures.
            </p>
            <p>
              My expertise includes working with modern technologies such as React and Tailwind CSS. I am committed to continuous learning and adapting to new technologies to solve complex problems and deliver high-quality solutions.
            </p>
            <p>
              I am proficient in a wide range of technical skills that enable me to excel as a Frontend Developer. My technical abilities include:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>Programming Languages: C++, C, HTML, CSS, JavaScript, Python, Java</li>
              <li>Database Management: MySQL</li>
              <li>Core Concepts: Data Structures and Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS)</li>
              <li>Frameworks and Tools: ReactJS, Joomla, Laravel, Flask, ELK Stack, GNS3</li>
              <li>Operating Systems: Windows, Ubuntu</li>
            </ul>
            <p>
              Additionally, my soft skills include leadership, event management, creative writing, public speaking, and time management. These skills enable me to work effectively in teams and manage projects efficiently.
            </p>
            <p>
              Outside of coding, I enjoy collaborating with teams, contributing to open-source projects, and exploring new advancements in technology. I am always eager to take on new challenges and make a positive impact through my work.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-2xl mx-auto transform hover:scale-105 transition duration-300">
          <SectionTitle icon={<FaBriefcase className="text-3xl text-yellow-400" />} title="Experience" />
          <div className="mb-4">
            <h6 className="text-2xl font-semibold text-white">CDAC Bangalore</h6>
          </div>
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>CI Protections Framework with Asset Management Tool and SOC</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;