import axios from 'axios';

const API_BASE_URL = `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPincodeDetails = async (pin) => {
  try {
    const response = await api.get(`/pincode/${pin}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status code outside the 2xx range
      throw error.response.data || { message: 'Failed to fetch pincode details' };
    } else if (error.request) {
      // Request was made but no response was received
      throw { message: 'Network error: Backend server is unreachable' };
    } else {
      // Something happened in setting up the request
      throw { message: error.message || 'An error occurred during search' };
    }
  }
};

export const getAreaDetails = async (areaName) => {
  try {
    const response = await api.get(`/area/${areaName}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data || { message: 'Failed to fetch area details' };
    } else if (error.request) {
      throw { message: 'Network error: Backend server is unreachable' };
    } else {
      throw { message: error.message || 'An error occurred during search' };
    }
  }
};

export default api;
