const postOfficeService = require('../services/postOfficeService');

const getByPincode = async (req, res) => {
  const { pin } = req.params;

  if (!pin || pin.length !== 6 || isNaN(pin)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid pincode format. Please provide a 6-digit numeric pincode.'
    });
  }

  try {
    const data = await postOfficeService.fetchByPincode(pin);
    
    if (data[0].Status === 'Error') {
      return res.status(404).json({
        success: false,
        message: data[0].Message || 'No results found'
      });
    }

    // Filter for Bangalore/Bengaluru if requested (optional but good for branding)
    // For now, let's return all but highlight that it's a Bangalore explorer
    res.status(200).json({
      success: true,
      count: data[0].PostOffice ? data[0].PostOffice.length : 0,
      data: data[0].PostOffice
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const getByArea = async (req, res) => {
  const { name } = req.params;

  if (!name || name.length < 3) {
    return res.status(400).json({
      success: false,
      message: 'Please provide at least 3 characters for the area name.'
    });
  }

  try {
    const data = await postOfficeService.fetchByArea(name);

    if (data[0].Status === 'Error') {
      return res.status(404).json({
        success: false,
        message: data[0].Message || 'No results found'
      });
    }

    res.status(200).json({
      success: true,
      count: data[0].PostOffice ? data[0].PostOffice.length : 0,
      data: data[0].PostOffice
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getByPincode,
  getByArea
};
