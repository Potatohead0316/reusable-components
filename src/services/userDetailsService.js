export const userDetails = async (userId) => {
    try {
        const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
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
