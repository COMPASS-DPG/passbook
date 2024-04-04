// Import axios
import axios from 'axios';

// Define the base URL of the API endpoint
// const baseUrl = 'https://test-compass.free.beeceptor.com/user';

// Create a function to fetch user data by user ID
const fetchUserById = async (userId: string) => {
  try {
    // Make a GET request to the API by appending the user ID to the base URL

    const headers = {
      Authorization: 'bearer ' + process.env.USER_SERVICE_TOKEN,
      'Content-Type': 'application/json',
    };

    const data = {
      request: {
        filters: {
          id: userId,
        },
      },
    };

    const response = await axios.post(
      'https://compass-dev.tarento.com/api/user/v4/user/search',
      data,
      { headers }
    );

    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      // Parse and return the user data
      return {
        name:
          response.data.result?.response?.content[0]?.profileDetails
            ?.personalDetails?.firstname +
          ' ' +
          response.data.result?.response?.content[0]?.profileDetails
            ?.personalDetails?.lastname,
        phone: response.data.result?.response?.content[0]?.phone,
        email:
          response.data.result?.response?.content[0]?.profileDetails
            ?.personalDetails?.primaryEmail,
        rootOrganization: {
          team: {
            name: response.data.result?.response?.content[0]?.profileDetails
              ?.employmentDetails?.departmentName,
            id: response.data.result?.response?.content[0]?.profileDetails
              ?.employmentDetails?.osid,
          },
          position:
            response.data.result?.response?.content[0]?.profileDetails
              ?.professionalDetails?.designation,
          dateOfJoining:
            response.data.result?.response?.content[0]?.profileDetails
              ?.professionalDetails?.doj,
          roles:
            response.data.result?.response?.content[0]?.organizations[0].roles,
        },
      };
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
