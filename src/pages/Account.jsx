import React from "react";
import { FaUserCircle, FaEnvelope, FaUser } from "react-icons/fa";

const Account = () => {

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    registeredDaysAgo: 7,
    profileImage: "",
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
      {/* Account Card */}
      <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-30 shadow-lg rounded-lg p-6 w-96">
        {user.profileImage ? (
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
        ) : (
          <FaUserCircle className="w-24 h-24 mx-auto" />
        )}

        <div className="mt-4 space-y-3">
          <div className="flex items-center space-x-3">
            <FaUser className="text-blue-500" />
            <h2 className="text-lg font-semibold">{user.name}</h2>
          </div>

          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-red-500" />
            <p className="">{user.email}</p>
          </div>

          <p className="text-sm mt-2">
            Registered {user.registeredDaysAgo} days ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
