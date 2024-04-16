import React, { useState } from 'react';
import { useSWRApi } from '../../api/useSWRApi';
import { ApiResponse, Planet } from '../../types/api/types';
import { endpoints } from '../../api/endpoints';
import Swapi3DPlanet from '../../components/Planets/Swapi3DPlanet'; // Ensure this path is correct
import Earth from '../../components/Planets/Planet'; // Ensure this path is correct

interface AdminProps {
  // Additional props can be added here
}

const AdminPage: React.FC<AdminProps> = (props) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useSWRApi<ApiResponse<Planet>>(
    endpoints.planets,
    undefined,
    undefined,
    page
  );

  function getPlanetColor(planet: Planet): string {
    if (planet.climate.includes('temperate')) {
      return 'green';
    } else if (planet.climate.includes('arid')) {
      return 'darkorange';
    }
    return 'gray'; // Default color
  }

  function getPlanetDiameter(diameter: string): number {
    const planetDiameter = parseInt(diameter, 10);
    if (isNaN(planetDiameter) || planetDiameter === 0) {
      return 50; // Return a minimum size if diameter is not available or zero
    }
    // Using a normalized and scaled diameter calculation
    const scaledDiameter = Math.pow(planetDiameter / 12742, 0.5) * 50; // Change exponent to 0.5 for less aggressive scaling
    return scaledDiameter;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    return <p>Error loading the data.</p>;
  }

  const planets = data.results as unknown as Planet[];

  return (
    <div>
      <Earth />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 m-8">
        {planets.map((planet) => (
          <div
            key={planet.url} // Ensure you have a unique key, here we use planet.url
            className="p-4 bg-gray-200 shadow-lg rounded-lg overflow-hidden relative"
          >
            <Swapi3DPlanet
              name={planet.name}
              rotationPeriod={parseFloat(planet.rotation_period)}
              orbitalPeriod={parseFloat(planet.orbital_period)}
              diameter={getPlanetDiameter(planet.diameter)}
              climate={planet.climate}
              gravity={planet.gravity}
              terrain={planet.terrain}
              surfaceWater={parseFloat(planet.surface_water)}
              population={parseFloat(planet.population)}
            />
          </div>
        ))}
      </div>
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default AdminPage;
