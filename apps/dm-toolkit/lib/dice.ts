export function roll(sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
}

export const rollD4 = () => roll(4);
export const rollD6 = () => roll(6);
export const rollD8 = () => roll(8);
export const rollD10 = () => roll(10);
export const rollD12 = () => roll(12);
export const rollD20 = () => roll(20);
export const rollD100 = () => roll(100);

export function modifier(stat: number): number {
  return Math.floor((stat - 10) / 2);
}

export function formatModifier(mod: number): string {
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

export function statModifier(stat: number): string {
  return formatModifier(modifier(stat));
}

// Returns true if a d20 roll qualifies as a failure trigger (nat 1-3)
export function isFailureTrigger(d20Result: number): boolean {
  return d20Result <= 3;
}

// Returns true if a d6 roll should trigger a session-start random skill (odd)
export function isSessionStartTrigger(): boolean {
  return rollD6() % 2 !== 0;
}
