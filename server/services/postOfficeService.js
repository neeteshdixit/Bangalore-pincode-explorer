const axios = require('axios');

const BASE_URL = 'https://api.postalpincode.in';

const fetchByPincode = async (pincode) => {
  try {
    const response = await axios.get(`${BASE_URL}/pincode/${pincode}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from India Post API');
  }
};

const fetchByArea = async (areaName) => {
  try {
    const response = await axios.get(`${BASE_URL}/postoffice/${areaName}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from India Post API');
  }
};

module.exports = {
  fetchByPincode,
  fetchByArea
};
