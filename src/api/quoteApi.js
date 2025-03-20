import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

// Fetch a random quote
export const fetchRandomQuoteApi = async () => {
  try {
    const response = await axios.get(`${API_URL}/quotes/random`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Failed to fetch data");
  }
};

export const fetchQuotesApi = async (token) => {
    try {
      const response = await axios.get(`${API_URL}/quotes`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Response from fetchQuotesApi:", response.data); 
      return response.data.data; 
    } catch (error) {
      throw error.response ? error.response.data : new Error("Failed to fetch quotes");
    }
  };
  

// Save a new quote
export const saveQuoteApi = async (quote, token) => {
  try {
    const response = await axios.post(`${API_URL}/quotes`, quote, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Failed to save quote");
  }
};

// Update a quote
export const updateQuoteApi = async (id, updatedQuote, token) => {
  try {
    const response = await axios.put(`${API_URL}/quotes/${id}`, updatedQuote, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Failed to update quote");
  }
};

// Delete a quote
export const deleteQuoteApi = async (id, token) => {
  try {
    await axios.delete(`${API_URL}/quotes/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    throw error.response ? error.response.data : new Error("Failed to delete quote");
  }
};
