import { useEffect, useState } from 'react';

interface scrollInterface {
  pageHeight: number;
  currentScroll: number;
  scrollPercentage: number;
}

export const useScrollTrack = () => {
  const [scrollPos, setScrollPos] = useState<scrollInterface | null>(null)

  function debounce(func: Function, wait:number = 20, immediate:boolean = true) {
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
    window.addEventListener('scroll',debounce(scrollPosUpdate));
    return () => {
      window.removeEventListener('scroll',debounce(scrollPosUpdate));
    }
  }, [])
  return scrollPos as scrollInterface;
}
