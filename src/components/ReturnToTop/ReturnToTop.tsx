import React from 'react';
import { useScrollTrack } from '../../utilities/customHooks/useScrollTrack';
import './ReturnToTop.scss';

function ReturnToTop() {
  const scrollPos = useScrollTrack();

  return (
    <button 
      className={`return-to-top ${scrollPos?.scrollPercentage>60?'return-to-top--active':''}`} 
      onClick={()=> window.scrollTo(0,0)}
    >
      Return to Top
    </button>
  )
}

export default ReturnToTop
