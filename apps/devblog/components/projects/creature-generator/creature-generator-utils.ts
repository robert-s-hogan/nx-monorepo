export async function fetchCreatureData(userFormState) {
  const url = '/api/creature-generator/generate';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userFormState),
    });

    console.log('Fetch response:', response);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response text:', errorText);
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data = await response.text();
    try {
      const json = JSON.parse(data);
      return json;
    } catch (error) {
      console.error('Failed to parse JSON:', data);
      throw new Error('Failed to parse JSON: ' + error.message);
    }
  } catch (error) {
    console.error('Network or server error:', error.message);
    throw error;
  }
}

export async function loadImage(imagePrompt) {
  try {
    const imageResponse = await fetch('/api/creature-generator/generateImage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imagePrompt }),
    });

    const imageData = await imageResponse.json();
    if (imageResponse.status !== 200) {
      throw new Error(
        imageData.error
          ? `Image request failed with message: ${imageData.error.message}`
          : `Image request failed with status ${imageResponse.status}`
      );
    }

    return imageData.imageUrl;
  } catch (error) {
    console.error(`Error with image API request: ${error}`);
    throw error; // Rethrow the error to be handled in the component
  }
}
