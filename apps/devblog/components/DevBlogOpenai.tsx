export const fetchResponseFromAssistant = async (prompt) => {
  try {
    const res = await fetch('/api/assistant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch response:', error);
    return null;
  }
};
