import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle, FaEnvelope, FaUser } from "react-icons/fa";
import { fetchUserProfile } from "../redux/authSlice";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const Account = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchUserProfile());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const calculateRegisteredDaysAgo = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - createdDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="flex justify-center items-center relative mt-20">
      {/* Account Card */}
      <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-30 shadow-lg rounded-lg p-6 w-96">
       
          <img
            src="/profile.png"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />      

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
            Registered {calculateRegisteredDaysAgo(user.created_at)} days ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;