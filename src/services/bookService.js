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

export const deleteBook = async (id) => {
  try {
    const response = await fetch(`${API_URL}/delete-book/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error removing book:', error)
    return null
  }
}

export const updateBook = async (id, updatedData) => {
  try {
    const response = await fetch(`${API_URL}/update-book/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error updating book:', error)
    return null
  }
}

export const findBook = async (id) => {
  try {
    const response = await fetch(`${API_URL}/find-book/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error finding book:', error)
    return null
  }
}

