import { useEffect, useState } from 'react';
import debounce from '../utilFunctions/debounce';

interface scrollInterface {
  pageHeight: number;
  currentScroll: number;
  scrollPercentage: number;
}

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
    window.addEventListener('scroll',debounce(scrollPosUpdate));
    return () => {
      window.removeEventListener('scroll',debounce(scrollPosUpdate));
    }
  }, [])
  return scrollPos as scrollInterface;
}
