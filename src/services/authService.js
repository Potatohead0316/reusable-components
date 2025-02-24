export const login = async (credentials) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
  
      const result = await response.json();
      return result;
    } catch (err) {
      throw new Error(err.message || 'Something went wrong');
    }
  };
  