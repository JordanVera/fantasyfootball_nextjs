
class AuthService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  // Define methods for interacting with the API here

  async recognize(images) {
    try {
      const response = await fetch(`${process.env.BASE_URL}/api/recognize`, { // Use process.env.BASE_URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ images }),
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AuthService();
