import { useEffect, useState } from 'react';
import debounce from '../utilFunctions/debounce';

interface scrollInterface {
  pageHeight: number;
  currentScroll: number;
  scrollPercentage: number;
}

/**
 * A customHook that returns details about the current scroll position of the user
 * 
 * @remarks
 * The hook deploys the debounce utilFunc which applies a leading limiter to how frequently
 * the scroll event fires the scrollPosUpdate, this can be customized but the default of 20ms is a good benchmark.
 * 
 * @example
 * Scenario: Page is 1000px in height and user has scrolled half-way through the page
 * As long as the user is currently scrolling, the function will fire every 20s and return
 * ```
 * const scroll = useScrollTrack();
 * // value equal to:
 * {
 *   pageHeight: 1000,
 *   currentScroll: 500;
 *   scrollPercentage: 50;
 * }
 * ```
 * @returns state :object - 
 * pageHeight:number - the total height of the page (refers to px);
 * currentScroll:number - the current scroll position of the user (refers to px);
 * scrollPercentage:number - represents the % that a user has scrolled a page
 */

export const useScrollTrack = () => {
  const [scrollPos, setScrollPos] = useState<scrollInterface | null>(null)

  function scrollPosUpdate(){
    let pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
    let currentScroll = window.pageYOffset + window.innerHeight;
    setScrollPos({
      pageHeight,
      currentScroll,
      scrollPercentage: Math.floor((currentScroll/pageHeight)*100)
    });
  }
  
  useEffect(() => {
    const funcRef = debounce(scrollPosUpdate);
    window.addEventListener('scroll',funcRef);
    return () => {
      window.removeEventListener('scroll',funcRef);
    }
  }, [])
  return scrollPos as scrollInterface;
}
