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
}

export default new UserService();
