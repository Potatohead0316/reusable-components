const API_URL = 'http://localhost:5000/api/book'

export const addBook = async (bookData) => {
    try {
        const response = await fetch(`${API_URL}/add-book`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (err) {
        throw new Error(err.message || 'Something went wrong');
    }
};

export const listBook = async () => {
  try {
    const response = await fetch(`${API_URL}/list-books`)
    const data = await response.json()
    return data // Assuming successResponse sends { message, data }
  } catch (error) {
    console.error('Error fetching books:', error)
    return []
  }
}
