import { Link } from 'react-router-dom';
import { aboutURL, customerFaqURL } from '../../utilities/routerConfig';
import './Home.scss';
import '../../styles/globals.scss';
import ReturnToTop from '../../components/ReturnToTop/ReturnToTop';
import { useScrollTrack } from '../../utilities/customHooks/useScrollTrack';
import { useEffect } from 'react';

// Component Will eventually be broken down into:
// <ReportingItem>
// <CheckingForUpdates>
//  About/FAQ part of Home
// <ContactUs>
// 

function Home() {
  const scrollPos = useScrollTrack();

  useEffect(() => {
    const svgImages = document.querySelectorAll('[data-type="drawable"]') as NodeListOf<SVGElement>;
    if (!scrollPos) return;
    svgImages.forEach(svg => {
      const {height:svgHeight,top:svgTop} = svg.getBoundingClientRect();
      const drawPoint: number = (svgTop - window.innerHeight) + svgHeight;
      // Leaving the below for now as the drawPoint/endPoint may be re-designed
      // const drawPoint: number = (svgTop - window.innerHeight) + svgHeight / 2;
      const endPoint: number = svgHeight / 2;
      // const endPoint: number = (svgHeight + (svgHeight / 2));
      const drawStart: boolean = drawPoint <= 0;
      const drawEnd: boolean = drawPoint <= -endPoint;
      const svgPath = svg.querySelector('path') as SVGPathElement;
      if(drawStart && !drawEnd) {
        const pathLength: number = svgPath?.getTotalLength() || 0;
        const pathPerc: number = (endPoint - Math.abs(drawPoint))/endPoint * pathLength;
        svgPath.style.strokeDashoffset = `${pathPerc}`;
        // Alternatively could simply toggle an '--active' class and animate
      };
    })
  }, [scrollPos])


  return (
    <>
    <main className="home">
      <section className="user-prompts">
        <section className="reporting">
          <h2 className="reporting__title">Reporting a Lost Item? <span className="reporting__start">Start Here.</span></h2>
          <div className="location">
            <label htmlFor="locationSearch" className="location__title">
              Hotel Location:
            </label>
            <div className="location__search-wrapper search-bar">
              <input
                className="location__search"
                type="text"
                // Not using type="search" to avoid default styling
                name="locationSearch" 
                placeholder="Hotel Name"
                id="locationSearch" />
              <button className="location__button">Go</button>
            </div>
            <p className="location__expl">
              After selecting the location or business you'll be taken to our quick and easy form to submit your lost item query.
            </p>
          </div>
        </section>
        <svg className="svg__top-curve--clip-path" viewBox="0 0 320 167">
          <defs>
            <clipPath id="svgPathTopCurve" clipPathUnits="objectBoundingBox">
              <path d="M1 0C0.531574 0.0332416 0.571931 0.606902 0.439015 0.764107C0.310989 0.915528 0.166843 0.996916 0.0171744 0.999914H1V0Z" fill="#143058"/>
            </clipPath>
          </defs>
        </svg>
        <svg className="svg__top-curve" preserveAspectRatio="none" viewBox="0 0 320 167" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M320 1C170.104 6.51009 183.018 101.599 140.485 127.658C99.5164 152.757 53.3898 166.248 5.49582 166.745H320V1Z" fill="#143058"/>
          <path stroke="#143058" strokeWidth="0.250391" d="M5.49582 166.745C53.3898 166.248 99.5164 152.757 140.485 127.658C183.018 101.599 170.104 6.51009 320 1V166.745H5.49582ZM5.49582 166.745H0C1.8344 166.764 3.6664 166.764 5.49582 166.745Z"/>
        </svg>
        <div className="update-wrapper">
          <section className="update">
            <h2 className="update__title">Looking for an update?</h2>
            <div className="reference">
              <label htmlFor="referenceSearch" className="reference__title">
                Enter your reference number:
              </label>
              <div className="reference__search-wrapper search-bar">
                <input
                  className="reference__search"
                  type="text"
                  // Not using type="search" to avoid default styling
                  name="referenceSearch" 
                  placeholder="e.g. G69f3tu6"
                  id="referenceSearch" />
                <button className="reference__button">Go</button>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="about-intro-wrapper">
        <section className="about-intro">
          <h2 className="about-intro__title">Aegis is...</h2>
          <div className="about-intro__summary">
            <p className="about-intro__msg">
              A secure platform for reporting, logging and tracking lost and found items. By enhancing
              the communication process the interface eases the process for clients and users alike. 
            </p>
            <Link to={aboutURL} className="about-intro__more">
              Learn More
              <svg className="svg-icon__chevron" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="14.7736" height="3.21165" transform="matrix(0.664353 0.747419 -0.664353 0.747419 2.18512 0)" fill="#FE5C32"/>
                <rect width="14.7736" height="3.21165" transform="matrix(0.664353 -0.747419 0.664353 0.747419 0 19.5995)" fill="#FE5C32"/>
              </svg>
            </Link>
          </div>
        </section>
        <svg 
          className="svg__lock"
          width="377" 
          height="202" 
          viewBox="0 0 377 202" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          data-type="drawable"
        >
          <path 
            className="svg__lock-path"
            d="M0 160.5H87.5L130.5 171C130.5 171 128.958 98.8215 130.5 92.0001C132.042 85.1787 138 80.5001 141.5 80.5001C145 80.5001 249.5 80.5001 249.5 80.5001L248 77.0001H233V48.5001C233 48.5001 228.123 31.1367 219.5 25.0001C213.463 20.7039 208.91 19.0001 201.5 19.0001C194.09 19.0001 189.428 20.5547 183.5 25.0001C175.256 31.1823 173.869 38.4715 171.5 48.5001C169.211 58.1918 171.5 74.0001 171.5 74.0001H151.5C151.5 74.0001 151.5 53.0001 151.5 40.5001C162.015 11.3243 172.963 2.89577 201.5 2C233 2.00003 252.46 29.5924 252 40.5001L253 81.0001H257.5C265.055 82.3477 269 86.0001 271 92.5001L270 171C265.823 183.454 262.006 189.406 248 195H211L210 166H217L211 141C211 141 216.693 137.227 218.5 133.5C220.467 129.444 220.623 126.366 219.5 122C218.312 117.384 216.612 114.411 212.5 112C209.722 110.371 207.72 110 204.5 110C201.28 110 199.249 110.322 196.5 112C192.524 114.427 191.104 117.475 190 122C188.932 126.38 189.083 129.42 191 133.5C192.703 137.126 198 141 198 141L191 164H204.5V195H157.5L137.5 177.5V184L154 200.5H291.5L319 160.5H377" 
            stroke="#FE5C32" 
            strokeWidth="3"
          />
        </svg>
        <aside className="about-intro-image">
          <svg className="svg__about--clip-path" viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="svgPathAbout" clipPathUnits="objectBoundingBox">
                <path d="M0.522313 0.351131C0.440611 0.528648 -0.218841 0.556404 0.0748971 0.725826C0.119428 0.747896 0.185782 0.74898 0.185782 0.782321C0.185782 0.797597 0.177752 0.797597 0.194885 0.808099C0.212018 0.818601 0.327106 0.831967 0.341559 0.833877C0.391344 0.841515 0.630631 0.851062 0.852252 0.902618C0.946407 0.921085 0.998684 0.969404 1 1V0C0.925239 0.0419395 0.655969 0.0607313 0.604015 0.173614L0.522313 0.351131Z" fill="none"/>
              </clipPath>
            </defs>
          </svg>
        </aside>
      </div>
      <div className="faq-intro-wrapper"> 
        <aside className="faq-intro-image">
          <svg className="svg__faq--clip-path" viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="svgPathFaq" clipPathUnits="objectBoundingBox">
                <path d="M0.288531 0.31495C0.347904 0.431728 0.444537 0.428472 0.783303 0.443138C1.12207 0.457803 0.96241 0.633741 0.96241 0.633741C0.96241 0.633741 0.823742 0.716902 0.858508 0.788774C0.960334 0.895794 0.0467701 0.819719 0 1L0.00328947 0.0751689C0.475301 -0.152347 0.229159 0.198172 0.288531 0.31495Z" fill="none"/>
              </clipPath>
            </defs>
          </svg>
        </aside>
        <svg 
          className="svg__question-mark"
          width="228" 
          height="203" 
          viewBox="0 0 228 203" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          data-type="drawable"
          >
          <path 
            className="svg__question-mark-path"
            d="M0 185.495H78.7565C78.7565 190.221 86.6321 201.247 100.021 201.247C113.409 201.247 121.285 191.552 121.285 179.589C121.285 168.169 114.984 157.537 99.2332 157.537C85.8423 157.537 80.3316 169.35 80.3316 169.35H113.409C113.409 169.35 113.409 145.723 113.409 132.335C113.409 118.946 123.648 113.827 123.648 113.827C123.648 113.827 143.945 99.9096 151.212 86.656C157.901 74.4567 160.451 65.8821 159.482 52.0031C158.581 39.0931 156.402 30.7905 148.062 20.8943C140.194 11.5567 133.012 8.15171 121.285 4.74923C108.584 1.06411 100.132 1.10312 87.4197 4.74923C78.6271 7.27102 73.6677 9.63714 66.5492 15.3814C58.7923 21.6407 54.8676 26.3655 50.7979 35.4643C46.4728 45.1341 46.4663 62.2415 46.4663 62.2415H76.7876C76.7876 62.2415 76.9849 48.7889 81.9067 42.5523C87.8867 34.975 95.1573 31.9924 104.746 33.1016C113.475 34.1112 119.686 37.4656 123.648 45.3088C127.184 52.3092 128.353 59.1174 123.648 65.3917C113.902 78.3865 112.228 79.9616 104.352 88.6248C94.7676 99.168 83.8756 104.697 83.8756 118.946C83.8756 129.578 83.8756 146.905 83.8756 146.905C83.8756 146.905 93.2529 146.45 99.2332 146.905C112.51 147.914 121.705 147.124 132.311 155.174C143.114 163.374 149.244 178.013 149.244 185.495H228" 
            stroke="#FE5C32" 
            strokeWidth="3"
          />
        </svg>
        <section className="faq-intro">
          <h2 className="faq-intro__title">FAQ's</h2>
          <div className="faq-intro__summary">
            <p className="faq-intro__msg">
              We all have questions from time-to-time. Not a problem! We're here to help. So that we can
              best assist you, are you a client or a user? 
            </p>
            <div className="faq-intro__link-wrapper">
              <Link to={customerFaqURL} className="faq-intro__link button--primary">
                Client
              </Link>
              <Link to={customerFaqURL} className="faq-intro__link button--secondary">
                User
              </Link>
            </div>
          </div>
        </section>
      </div>
      <section className="contact-us">
      <svg 
        className="svg__phone"
        width="445" 
        height="377" 
        viewBox="0 0 445 377" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        data-type="drawable"
      >
        <path 
          className="svg__phone-path"
          d="M2 372.401C2 372.401 8.43592 366.611 13.404 364.387C24.0606 359.617 43.9175 365.929 43.9175 365.929L100.321 374.867C122.64 376.719 132.339 373.84 144.088 360.997C150.448 351.119 149.367 341.278 144.088 320.621C142.042 308.825 137.072 302.255 138.848 290.415C140.937 276.492 146.396 268.509 157.033 259.285C164.721 252.62 170.636 250.874 180.15 247.265C193.238 242.3 195.646 257.045 206.348 261.751C219.172 267.391 226.467 269.955 240.56 272.539C254.966 275.179 270.765 265.142 274.156 259.285C277.546 253.429 282.76 245.838 285.56 236.169C288.651 225.492 288.794 218.902 288.026 207.813C287.101 194.479 274.156 185.313 269.841 184.697C262.154 180.835 254.935 181.574 244.259 180.382C233.582 179.189 227.803 183.135 218.368 187.779C208.347 192.712 201.779 195.76 195.56 205.039C190.284 212.913 187.003 218.748 188.163 228.155C189.007 234.997 190.847 239.153 195.56 244.183C202.822 251.932 210.861 251.693 221.451 252.505C230.397 253.191 235.769 252.634 244.259 249.731C253.675 246.51 259.026 243.992 266.759 237.71C273.913 231.898 278.352 228.151 280.937 219.525C282.257 215.12 283.508 212.446 283.094 207.813C282.248 198.339 276.345 193.252 267.991 188.704C261.127 184.966 256.082 185.315 248.266 185.313C239.437 185.311 234.108 185.968 226.074 189.628C219.478 192.633 215.796 195.007 210.971 200.416C207.37 204.453 204.649 206.826 203.574 212.128C202.559 217.133 202.546 220.855 205.423 225.073C207.869 228.659 210.613 229.696 214.67 231.238C219.529 233.084 222.728 232.633 227.923 232.471C234.412 232.267 238.139 231.555 244.259 229.388C249.892 227.394 253.248 226.148 257.82 222.299C262.149 218.655 264.144 215.913 266.759 210.895C268.764 207.047 267.687 199.92 271.998 200.416C277.12 201.005 280.32 203.19 286.484 196.409C292.649 189.628 305.594 172.985 305.594 172.985C305.594 172.985 334.337 143.801 350.285 123.053C358.033 112.975 370.613 111.016 371.861 102.095C372.589 96.8876 371.262 93.3964 368.162 89.1495C364.815 84.5635 359.748 85.5565 355.833 81.4441C348.877 74.137 348.202 66.875 348.128 56.7867C348.045 45.4822 351.32 38.9021 357.374 29.3554C362.936 20.5867 367.406 16.1137 376.176 10.5542C383.104 6.16192 387.458 3.59698 395.593 2.54051C404.287 1.41147 410.036 1.83087 417.785 5.9309C423.883 9.15726 427.541 11.8337 430.73 17.9514C435.125 26.3837 432.841 33.0288 430.73 42.3005C429.385 48.2073 428.106 51.4813 425.182 56.7867C421.788 62.9443 419.111 66.0471 414.086 70.9647C409.235 75.713 406.264 78.3596 400.217 81.4441C393.633 84.8021 389.421 86.826 382.032 86.6838C375.104 86.5505 370.625 85.5996 365.08 81.4441C358.984 76.8759 356.423 72.2657 354.909 64.8004C353.46 57.6599 355.263 53.2807 357.374 46.3073C360.169 37.076 362.63 31.607 369.395 24.7321C375.534 18.4932 379.809 14.0208 388.504 13.0199C394.977 12.2748 399.667 12.4494 404.84 16.4103C409.463 19.95 411.043 23.6566 412.237 29.3554C413.48 35.2881 412.394 39.0463 410.388 44.7663C408.584 49.909 406.985 52.7723 403.299 56.7867C396.635 64.0447 390.328 67.0128 380.491 67.5743C374.386 67.9228 369.395 67.5743 363.847 64.8004C358.299 62.0264 359.906 52.2011 360.457 50.3142C361.514 44.9293 367.546 43.8416 374.326 50.3142C379.88 55.6156 386.573 58.3796 393.436 54.9374C399.455 51.9184 404.872 45.8052 401.758 39.8348C398.949 34.4512 392.012 33.2767 386.655 36.1362C382.558 38.3234 378.456 42.1319 380.491 46.3073C382.424 50.2757 387.379 49.7998 391.587 48.4649C398.962 46.1248 393.291 36.2391 396.826 29.3554C398.458 26.1773 399.212 24.1566 401.758 21.65C407.437 16.0577 413.763 14.4283 421.484 16.4103C428.35 18.1732 431.203 22.3749 435.353 28.1225C440.881 35.7779 441.953 41.8091 442.442 51.2388C443.076 63.4578 442.346 72.3866 434.12 81.4441C428.68 87.4347 424.043 89.7662 416.244 91.9235C401.758 95.9303 386.099 87.9042 385.422 93.4646C384.655 99.761 391.36 102.819 390.354 111.341C389.179 121.291 378.025 133.841 378.025 133.841L359.224 157.574L342.888 176.991L328.402 193.635C328.402 193.635 323.242 199.751 319.464 203.19C314.496 207.711 311.382 209.953 305.594 213.361C301.651 215.683 298.099 215.133 295.115 218.601C287.285 227.699 284.776 243.732 286.484 246.032C288.193 248.332 296.039 247.265 330.868 210.895C365.696 174.526 365.696 174.526 365.696 174.526C365.696 174.526 385.223 152.051 395.902 136.307C404.626 123.442 416.244 102.095 416.244 102.095" 
          stroke="#FE5C32" 
          strokeWidth="3"
          strokeDashoffset="2000"
          />
      </svg>
        <div className="contact-us__wrapper">
          <div className="contact-us__summary">
            <h2 className="contact-us__title">Contact Us</h2>
            <p className="contact-us__msg">
              Still have some questions that our <Link to={customerFaqURL} className="contact-us__faq-link">FAQ's</Link> didn't answer?
              Or are you just wanting to talk? either way submit your query below and we will respond within two business days.
            </p>
            <p className="contact-us__msg --expanded">
              If you are looking for an update on a lost item please enter your reference number above or alternatively
              contact the hotel directly.
            </p>
          </div>
          <form className="contact-form">
            <label htmlFor="contactName" className="contact-form__name">
              Name
            </label>
            <input 
              type="text" 
              name="contactName" 
              id="contactName" 
              className="contact-form__name-field" 
              placeholder="Enter your name here"
            />
            <label htmlFor="contactEmail" className="contact-form__email">
              Email
            </label>
            <input 
              type="email" 
              name="contactEmail" 
              id="contactEmail" 
              className="contact-form__email-field" 
              placeholder="Enter your email here"
            />
            <label htmlFor="contactSubject" className="contact-form__subject">
              Subject
            </label>
            <input 
              type="text" 
              name="contactSubject" 
              id="contactSubject" 
              className="contact-form__subject-field" 
              placeholder="What is your message regarding?"
            />
            <label htmlFor="contactMessage" className="contact-form__message">
              Message
            </label>
            <textarea 
              name="contactMessage" 
              id="contactMessage" 
              className="contact-form__message-field"
              placeholder="Please provide a detailed message so that we may determine how best to assist you"
            >
            </textarea>
            <button type="submit" className="contact-form__submit button--primary">Submit</button>
          </form>
        </div>
      </section>
    </main>
    <ReturnToTop/>
    </>
  );
}

export default Home;