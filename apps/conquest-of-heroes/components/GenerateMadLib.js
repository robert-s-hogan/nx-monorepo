import { useEncounter } from '../hooks/useEncounter';

const GenerateMadLib = () => {
  const {
    isLoading: encounterLoading,
    error: encounterError,
    intro,
  } = useEncounter('/api/encounter');

  if (encounterLoading) return <div>Loading...</div>;
  if (encounterError) return <div>Error</div>;

  const selectedArrival =
    intro.arrival[Math.floor(Math.random() * intro.arrival.length)];
  const selectedAtmosphere =
    intro.atmosphere[Math.floor(Math.random() * intro.atmosphere.length)];
  const selectedLocation =
    intro.location[Math.floor(Math.random() * intro.location.length)];
  const selectedLighting =
    intro.lighting[Math.floor(Math.random() * intro.lighting.length)];
  const selectedEvents =
    intro.events[Math.floor(Math.random() * intro.events.length)];
  const selectedSenses =
    intro.senses[Math.floor(Math.random() * intro.senses.length)];
  const selectedMood =
    intro.mood[Math.floor(Math.random() * intro.mood.length)];

  const madlib = `You ${selectedArrival} a ${selectedLocation} that ${selectedLighting}. ${selectedSenses} fills your senses as you notice ${selectedEvents}. The ${selectedAtmosphere} ${selectedMood}.`;

  return <div>{madlib}</div>;
};

export default GenerateMadLib;
