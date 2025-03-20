import React from 'react';
import { FaHeart, FaQuoteRight, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import GenerateQuote from './GenerateQuote';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 p-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12 text-center">
          Get an <span className="font-bold text-blue-600">free</span> famous Quote for your
          <span className="font-bold text-blue-600"> idea</span>
        </h1>
        <div className='text-center px-10'>
        <p className="text-lg text-gray-700 mb-4">
            Welcome to our quote generator! Whether you're looking to create a simple personal blog, a robust e-commerce platform, or a complex web application, we have the tools and expertise to help you get started.
        </p>
        <p className="text-lg text-gray-700 mb-4">
            Our goal is to provide you with a personalized quote that meets your specific needs and budget. With just a few clicks, you can generate a quote that gives you a clear idea of the costs involved in bringing your vision to life.
        </p>
        </div>

        <GenerateQuote />
        <br />
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
          Our <span className="font-bold text-blue-600">Feature</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Generate Quote Box */}
          <div className="w-56 h-64 flex flex-col items-center justify-center rounded-2xl bg-blue-500 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-600 cursor-pointer">
            <FaQuoteRight className="text-6xl text-white mb-4" />
            <div className="text-white text-xl font-medium">Generate Quote</div>
          </div>

          {/* Favorite Box */}
          <div
            className="w-56 h-64 flex flex-col items-center justify-center rounded-2xl bg-blue-500 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-600 cursor-pointer"
            onClick={() => navigate('/favorite')}
          >
            <FaHeart className="text-6xl text-white mb-4" />
            <div className="text-white text-xl font-medium">Favorite</div>
          </div>

          {/* Account Box */}
          <div
            className="w-56 h-64 flex flex-col items-center justify-center rounded-2xl bg-blue-500 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-600 cursor-pointer"
            onClick={() => navigate('/account')}
          >
            <FaUser className="text-6xl text-white mb-4" />
            <div className="text-white text-xl font-medium">Account</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;