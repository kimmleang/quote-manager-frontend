import React from "react";

const LoadingModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
        <div className="loader border-t-4 border-blue-600 rounded-full w-12 h-12 animate-spin"></div>
        <p className="ml-4 text-lg font-medium text-gray-700">Processing...</p>
      </div>
    </div>
  );
};

export default LoadingModal;