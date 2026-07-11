// Thin wrapper around the browser's built-in text-to-speech (Web Speech
// API) — no new dependency, voice/quality is whatever the device provides.
export function speak(text: string): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  // Cancel anything mid-utterance so announcements don't stack up if the
  // user moves through exercises faster than the voice can talk.
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}
