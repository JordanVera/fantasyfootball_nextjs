class UserService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async getCurrentlyLoggedInUser() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
        // Use process.env.BASE_URL
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.log(response);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async getAllUsers() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
        {
          // Use process.env.BASE_URL
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        console.log(response);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async submitPicks(week, picks) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/picks`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ week, picks }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch subscription');
      }

      const sub = await response.json();

      // displaySuccessToast(
      //   'you have succesfully requested access to join this class'
      // );

      return sub;
    } catch (error) {
      console.error('Failed to fetch subscription', error);
      throw error;
    }
  }
}

export default new UserService();
