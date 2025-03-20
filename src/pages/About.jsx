import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">About Us</h1>
        <p className="text-gray-700 text-lg mt-3 max-w-2xl mx-auto">
          Learn more about who we are, what we do, and why we’re passionate about bringing you the best experience.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white shadow-md rounded-lg p-6 md:p-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-gray-700 mt-4">
          Our mission is to inspire and empower individuals with meaningful quotes and insights. 
          We believe that words have the power to change perspectives, uplift spirits, and spark creativity.
        </p>
      </div>

      {/* Values Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-blue-600">Integrity</h3>
          <p className="text-gray-700 mt-2">
            We believe in honesty, transparency, and delivering high-quality content to our users.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-blue-600">Innovation</h3>
          <p className="text-gray-700 mt-2">
            We constantly improve and explore new ways to make quote discovery engaging and inspiring.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-blue-600">Community</h3>
          <p className="text-gray-700 mt-2">
            We foster a community that values learning, motivation, and self-improvement.
          </p>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          We’re a group of passionate individuals dedicated to curating the best content for you.
        </p>
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img 
              src="/profile.png" 
              alt="Team Member" 
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">John Kimleang</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img 
              src="/profile.png" 
              alt="Team Member" 
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Jane Maya</h3>
            <p className="text-gray-600">Content Manager</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img 
              src="/profile.png" 
              alt="Team Member" 
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Elon Thyy</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Join Our Community</h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          Stay updated with the latest quotes, insights, and inspiration by subscribing to our newsletter.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default About;
