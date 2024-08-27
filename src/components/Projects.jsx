import React from 'react';
import { FaCalendar, FaRobot, FaHtml5, FaCss3Alt, FaDatabase, FaPython } from 'react-icons/fa';
import { SiCsharp, SiMysql } from 'react-icons/si';

const getTechIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case 'html': return <FaHtml5 className="text-orange-500" />;
    case 'css': return <FaCss3Alt className="text-blue-500" />;
    case 'c#': return <SiCsharp className="text-purple-600" />;
    case 'mysql': return <SiMysql className="text-blue-700" />;
    case 'python': return <FaPython className="text-yellow-500" />;
    default: return <FaDatabase className="text-gray-500" />;
  }
};

const ProjectCard = ({ title, icon, color, description, technologies }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 mb-8">
    <div className={`${color} p-6`}>
      <div className="flex items-center">
        {icon}
        <h3 className="text-2xl font-bold text-white ml-4">{title}</h3>
      </div>
    </div>
    <div className="p-6">
      {description.map((item, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h4>
          <p className="text-gray-600">{item.content}</p>
        </div>
      ))}
      <div className="mt-6">
        <h4 className="font-semibold text-lg text-gray-800 mb-2">Technologies Used</h4>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center px-3 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
              {getTechIcon(tech)}
              <span className="ml-2">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Youth Festival Management",
      icon: <FaCalendar className="text-4xl text-white" />,
      color: "bg-gradient-to-r from-blue-500 to-blue-700",
      description: [
        {
          title: "Frontend Development",
          content: "Developed responsive and interactive web interfaces using HTML and CSS, focusing on enhancing user experience and facilitating smooth interactions with the system."
        },
        {
          title: "Database Integration",
          content: "Designed and implemented MySQL database schemas to manage event, participant, and registration data, ensuring data integrity and optimizing query performance."
        }
      ],
      technologies: ["HTML", "CSS", "C#", "MySQL"]
    },
    {
      title: "Voice Enabled AI Personal Assistant for PC",
      icon: <FaRobot className="text-4xl text-white" />,
      color: "bg-gradient-to-r from-green-500 to-green-700",
      description: [
        {
          title: "Voice Command Recognition",
          content: "Integrated speech recognition capabilities to interpret and execute user commands with high accuracy, enhancing the user experience."
        },
        {
          title: "Natural Language Processing",
          content: "Utilized NLP techniques to analyze and understand user queries, allowing for dynamic, context-aware responses and interaction."
        },
        {
          title: "Task Automation",
          content: "Automated common PC tasks including launching applications, setting reminders, and managing files through voice commands, improving efficiency."
        }
      ],
      technologies: ["Python", "Speech Recognition Libraries", "NLP Libraries"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-12 text-center">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;