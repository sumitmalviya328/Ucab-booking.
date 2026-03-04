import React from "react";

const teamMembers = [
  {
    name: "Sumit Malviya",
    role: "Team Lead – Project Execution",
  },
  {
    name: "Vaibhavi Sinha",
    role: "Frontend Developer, Database",
  },
  {
    name: "Swangi Dubey",
    role: "Backend Development, Database",
  },
  {
    name: "Vibhor Saxena",
    role: "Project Architecture",
  },
  {
    name: "Sunny Sunny",
    role: "Project Setup and Configuration",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Team
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">
              {member.name}
            </h2>

            <p className="text-yellow-400">
              {member.role}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}