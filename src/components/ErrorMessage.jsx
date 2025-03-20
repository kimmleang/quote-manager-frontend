import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="text-red-500 bg-red-100 border border-red-400 p-3 rounded-md my-5">
      {message || "Something went wrong. Please try again."}
    </div>
  );
};

export default ErrorMessage;
