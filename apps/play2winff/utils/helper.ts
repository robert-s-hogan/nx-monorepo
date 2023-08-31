export const convertToRoundAndPick = (
  value: number,
  teams: number
): { round: number; pick: number } => {
  const round = Math.ceil(value / teams);
  const pick = value - (round - 1) * teams;
  return { round, pick };
};

export const generatePlayerID = (name: string) => {
  return name.split(' ').join('_').toLowerCase();
};
