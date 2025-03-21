import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Register
export const registerUserApi = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.errors) {
      throw new Error(error.response.data.errors.email[0]);
    } else {
      throw new Error("Failed to register user");
    }
  }
};

// Login 
export const loginUserApi = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.errors) {
      throw new Error(error.response.data.errors.email[0]);
    } else {
      throw new Error("Failed to login user");
    }
  }
};

export const fetchUserProfileApi = async (token) => {
    try {
      const response = await axios.get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Response from fetchUserProfileApi:", response.data.original.user);
      return response.data.original.user;
    } catch (error) {
      throw new Error("Failed to fetch user profile");
    }
  };