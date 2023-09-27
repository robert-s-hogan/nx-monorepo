export type OutcomeType = {
  result: string;
  image: any;
  damage?: number; // Include the damage amount in the outcome
};

export type DiceRollerProps = {
  onRoll: (outcome: OutcomeType) => void;
  defense: number;
};
