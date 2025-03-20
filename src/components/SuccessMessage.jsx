import React from "react";

const SuccessMessage = ({ message }) => {
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg mt-4 text-center my-5">
      {message}
    </div>
  );
};

export default SuccessMessage;
