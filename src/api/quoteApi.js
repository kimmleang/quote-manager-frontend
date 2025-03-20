import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const fetchRandomQuoteApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/quotes/random`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Failed to fetch data");
  }
};

export const saveQuoteApi = async (quote, token) => {
  try {
    const response = await axios.post(`${API_URL}/quotes`, quote, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Failed to save quote");
  }
};