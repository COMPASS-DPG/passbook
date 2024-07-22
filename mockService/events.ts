import axios from 'axios';

const passbookActivityEvent = async (event: {
  userId: string;
  activity: string;
}) => {
  try {
    // Make a GET request to the API by appending the user ID to the base URL

    const headers = {
      'Content-Type': 'application/json',
    };

    const data = {
      data: {
        event: event,
      },
    };

    const baseUrl =
      `${process.env.NEXT_PUBLIC_OBSRV_URL}` +
        'data/v1/in/event-passbook-activity' || '';

    const response = await axios.post(baseUrl, data, { headers });

    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      // Parse and return the user data
      return true;
    } else {
      // Handle other status codes or errors
      throw new Error('Failed to fetch user data');
    }
  } catch (error) {
    // Handle errors, such as network issues
    // eslint-disable-next-line no-console
    console.error('Error hitting event-passbook-activity:', error);
  }
};

export { passbookActivityEvent };
