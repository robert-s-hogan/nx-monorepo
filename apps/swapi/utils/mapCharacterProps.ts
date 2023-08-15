export function mapHeightToSize(height: string): string {
  const num = parseInt(height, 10);
  if (num <= 100) return 'h-12 w-12';
  else if (num <= 150) return 'h-24 w-24';
  else if (num <= 200) return 'h-48 w-48';
  else return 'h-64 w-64';
}

export function mapMassToWidth(mass: string): string {
  const num = parseInt(mass, 10);
  if (num <= 50) return 'w-12';
  else if (num <= 100) return 'w-24';
  else if (num <= 150) return 'w-48';
  else return 'w-64';
}
