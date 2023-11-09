// libs/utils/src/lib/function-utils.ts
export function debounce(fn: Function, delay: number): Function {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = null;
    }, delay);
  };
}

type SetIsCopied = (value: boolean) => void;

export function copyToClipboard(image: string, setIsCopied: SetIsCopied): void {
  navigator.clipboard.writeText(image);
  setIsCopied(true);
  setTimeout(() => setIsCopied(false), 2000);
}
