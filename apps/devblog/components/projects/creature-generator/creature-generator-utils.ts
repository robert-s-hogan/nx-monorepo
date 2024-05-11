export async function fetchCreatureData(userFormState) {
  const url = '/api/creature-generator/generate';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        numberOfPlayers: userFormState.numberOfPlayers,
        playerLevel: userFormState.playerLevel,
        challengeRating: userFormState.challengeRating,
        creatureType: userFormState.creatureType,
        alignment: userFormState.alignment,
        environment: userFormState.environment,
        size: userFormState.size,
        specialTrait: userFormState.specialTrait,
        language: userFormState.language,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json(); // Get detailed error response
      throw new Error(`Failed to fetch: ${errorData.message}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error; // Rethrow to handle it in the component
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
