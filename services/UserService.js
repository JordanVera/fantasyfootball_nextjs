import { toast } from 'react-toastify';

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

      const res = await response.json();

      if (!response.ok) {
        toast.error(res.error, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        // throw new Error(errorData.error || 'Failed to fetch resscription');
      }

      toast.success(res.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });

      return res;
    } catch (error) {
      console.error('Failed to fetch subscription', error);
      throw error;
    }
  }

  async signupUser(
    firstname,
    lastname,
    username,
    email,
    password,
    confirmPassword
  ) {
    const signup = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        firstname,
        lastname,
        username,
        email,
        password,
        confirmPassword,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const res = await signup.json();

    if (!res.ok) {
      toast.error(res.error, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }

    toast.success(res.message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  }

  async loginUser(identifier, password) {
    const login = await fetch('/api/signin', {
      method: 'POST',
      body: JSON.stringify({ identifier, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const res = await login.json();

    if (!res.ok) {
      toast.error(res.error, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }

    toast.success(res.message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  }

  async checkoutWithCrypto(chargeObj) {
    try {
      const response = await fetch(`/api/crypto-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chargeObj }),
      });

      if (!response.ok) {
        console.error('Error:', response.statusText);
        return null;
      }

      const data = await response.json();
      console.log('Success:', data);
      return data;
    } catch (error) {
      console.error('Failed to checkout with crypto', error);
      throw error;
    }
  }
}

export default new UserService();
