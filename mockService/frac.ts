// Import axios
import axios from 'axios';

// Define the URL of the API endpoint
const apiUrl = 'https://test-compass.free.beeceptor.com/frac/getrole';

// Create a function to fetch roles data
const fetchRolesFromFrac = async () => {
  try {
    // Make a GET request to the API
    const response = await axios.get(apiUrl);

    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      // Parse and return the roles data
      return response.data;
    } else {
      // Handle other status codes or errors
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    // Handle errors, such as network issues
    // eslint-disable-next-line no-console
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchRolesFromFrac;
