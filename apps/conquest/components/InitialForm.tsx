import { useState } from 'react';

function InitialForm() {
  const [players, setPlayers] = useState('3');

  return (
    <form method="POST" action="/content">
      <label htmlFor="players">How many players?</label>
      <input
        id="players"
        placeholder="How many players?"
        type="number"
        value={players}
        name="players"
        onChange={(e) => setPlayers(e.target.value)}
      />
      <button className="mt-2" type="submit">
        Submit
      </button>
    </form>
  );
}

export default InitialForm;
