import React, { useState } from "react";
import { FaHeart, FaSyncAlt } from "react-icons/fa";

const GenerateQuote = () => {
  const [quote, setQuote] = useState({
    author: "Author Name",
    content: "Your generated quote will appear here.",
  });

  const [favorite, setFavorite] = useState(null);

  const handleGenerate = () => {
    setQuote({
      author: "John Doe",
      content: "This is a sample quote. The real quote will be fetched from an API.",
    });
  };

  const handleSaveFavorite = () => {
    setFavorite(quote);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 p-6">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
        Generate an <span className="font-bold text-blue-600">Inspirational Quote</span>
      </h1>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition"
          onClick={handleGenerate}
        >
          <FaSyncAlt /> Generate Quote
        </button>
        {/* <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-2 hover:bg-red-600 transition"
          onClick={handleSaveFavorite}
        >
          <FaHeart /> Save to Favorite
        </button> */}
      </div>

      {/* Quote Display */}
      <div className="mt-6 p-6 w-full max-w-2xl bg-white shadow-lg rounded-xl text-center">
        <p className="text-lg text-gray-800 italic">"{quote.content}"</p>
        <p className="mt-4 text-gray-600 font-medium">- {quote.author}</p>
      </div>

      {favorite && (
        <div className="mt-6 p-4 w-full max-w-md bg-blue-100 shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold text-blue-600">Favorite Quote</h2>
          <p className="text-gray-700 italic">"{favorite.content}"</p>
          <p className="mt-2 text-gray-500 font-medium">- {favorite.author}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateQuote;
