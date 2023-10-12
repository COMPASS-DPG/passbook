// Import axios
import axios from 'axios';

// Define the base URL of the API endpoint
const baseUrl = 'https://test-compass.free.beeceptor.com/user';

// Create a function to fetch user data by user ID
const fetchUserById = async (userId: string) => {
  try {
    // Make a GET request to the API by appending the user ID to the base URL
    const response = await axios.get(`${baseUrl}/${userId}`);

    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      // Parse and return the user data
      return response.data;
    } else {
      // Handle other status codes or errors
      throw new Error('Failed to fetch user data');
    }
  } catch (error) {
    // Handle errors, such as network issues
    // eslint-disable-next-line no-console
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export default fetchUserById;
