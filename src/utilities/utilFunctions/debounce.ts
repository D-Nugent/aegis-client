export default function debounce(func: Function, wait:number = 20, immediate:boolean = true) {
  let timeout: ReturnType<typeof setTimeout>|null;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}