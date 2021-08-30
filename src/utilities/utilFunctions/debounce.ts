/**
 * Acts as a limiter for controlling how frequently an event can fire
 * 
 * @remarks
 * Debounce is used to limit high-firing events such as user interactions (i.e. scrolling, form entry, screen resize).
 * It's purpose is to lessen the pressure placed on the users browser/device or to prevent premature actions.
 * @example
 * Theoretical: If you have a form-validation function you may pass your validation logic into the debounce so it doesn't
 * immediately fire when a user finishes a keypress but 2s after they have finished typing.
 * @param func :Function - The function which you wish to assign the delay to
 * @param wait :number - The time you would like to wait for the function to be reinvoked
 * @param immediate :boolean - Whether the function has a leading-edge or not (i.e. if it refires immediately when 
 * reinvoked by the user or waits for lull of no-action)
 * @returns an instance of the function that was passed as a param wrapped in a timeout
 */


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