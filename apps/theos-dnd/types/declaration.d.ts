// File: custom.d.ts or any other .d.ts file included in your tsconfig.json
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.wav' {
  const src: string;
  export default src;
}

declare module '*.mp3' {
  const src: string;
  export default src;
}
