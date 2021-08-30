import { useScrollTrack } from '../../utilities/customHooks/useScrollTrack';
import './ReturnToTop.scss';

/**
 * Shows a returnToTop button/modal
 * 
 * @remarks
 * Modal will only appear once the user has scrolled more than 60% of the page. The component
 * is dependent on the useScrollTrack customHook.
 * 
 * @returns button element
 */
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
