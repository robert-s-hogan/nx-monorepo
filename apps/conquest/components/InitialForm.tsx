import { useState } from 'react';

import { FormControl, Input, Button, FormLabel } from '@chakra-ui/react';

function InitialForm() {
  const [players, setPlayers] = useState('3');

  return (
    <form method="POST" action="/content">
      <FormControl>
        <FormLabel htmlFor="players">How many players?</FormLabel>
        <Input
          id="players"
          placeholder="How many players?"
          type="number"
          value={players}
          name="players"
          onChange={(e) => setPlayers(e.target.value)}
        />
      </FormControl>
      <Button mt={2} type="submit">
        Submit
      </Button>
    </form>
  );
}

export default InitialForm;
