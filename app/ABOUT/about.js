import React from 'react';

const About = () => {
  return (
    <div className="p-8 mt-40">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Specifications</h2>
          <p><strong>Project Topic:</strong> Social Gardening</p>
          <p>
            Our goal is to create a user-friendly platform that connects people with plots of land to use as a personal garden or hobby farm.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Prepared for</h2>
          <p>Mamta Verma, CPSY301 Instructor at Southern Alberta Institute of Technology</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Prepared by</h2>
          <ul className="list-disc list-inside">
            <li>Chris Boyle</li>
            <li>Lovepreet Singh</li>
            <li>Jashanpreet Singh Sran</li>
            <li>Muke Mekumba Maeva Vicky</li>
            <li>Rajat Sharma</li>
          </ul>
          <p>Software Development Students, SAIT</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Team Name</h2>
          <p>Tech Titans</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Progress Details</h2>
          <p>
            Our team is dedicated to building an app that allows users to connect with landowners who have unused or underutilized garden space. Users and landowners will be able to communicate directly through the app and pay for land rentals.
          </p>
        </div>

        <div className="text-center mt-12">
          <p className="italic">31 May 2024</p>
        </div>
      </div>
    </div>
  );
};

export default About;
