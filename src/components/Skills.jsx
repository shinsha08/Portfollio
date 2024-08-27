import React from 'react';
import { FaCode, FaDatabase, FaCogs, FaLayerGroup, FaDesktop, FaUsers, FaFileWord, FaFilePowerpoint, FaFileExcel } from 'react-icons/fa';

const SkillCard = ({ title, skills, icon, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <div className={`p-3 rounded-full ${color} text-white mr-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <ul className="text-gray-600 list-disc list-inside">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "C", "HTML", "CSS", "JavaScript", "Python", "Java"],
      icon: <FaCode size={24} />,
      color: "bg-blue-500"
    },
    {
      title: "Databases",
      skills: ["MySQL"],
      icon: <FaDatabase size={24} />,
      color: "bg-green-500"
    },
    {
      title: "Technical Skills",
      skills: ["Data Structures and Algorithms", "OOPS", "DBMS"],
      icon: <FaCogs size={24} />,
      color: "bg-purple-500"
    },
    {
      title: "Frameworks",
      skills: ["ReactJS", "Joomla", "Laravel", "Flask", "ELK Stack", "GNS3"],
      icon: <FaLayerGroup size={24} />,
      color: "bg-yellow-500"
    },
   
    {
      title: "Software",
      skills: ["Windows", "Ubuntu"],
      icon: <FaDesktop size={24} />,
      color: "bg-pink-500"
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Event Management", "Public Speaking", "Time Management"],
      icon: <FaUsers size={24} />,
      color: "bg-indigo-500"
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" data-aos="fade-up">
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;