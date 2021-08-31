import './About.scss';
import Hero from '../../components/Hero/Hero';
import AegisScreenshot from '../../assets/images/aegis-screenshot.png';
import FastIcon from '../../assets/icons/about-fast.svg';
import SecureIcon from '../../assets/icons/about-secure.svg';
import SupportedIcon from '../../assets/icons/about-supported.svg';
import AboutTeamImg from '../../assets/images/about-team.png';

function About() {

    return(
        <main className="about">
            <Hero classes="purpose">
                <h1 className="purpose__heading">About Aegis</h1>
                <h2 className="purpose__heading-secondary purpose__heading-secondary--emphasis">Mission Statement Goes Here For Impact</h2>
                <h2 className="purpose__heading-secondary">Our Purpose</h2>
                <div className="purpose__text-wrapper">
                    <p className="purpose__text">Lorem Ipsum Text here. A secure platform for reporting, logging and tracking lost and found items. Intended to ease the process for clients and users alike.</p>
                    <p className="purpose__text">Lorem Ipsum Text here. A secure platform for reporting, logging and tracking lost and found items. Intended to ease the process for clients and users alike.</p>
                </div>
                {/* <svg className="purpose__svg" viewBox="0 0 142 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 60.7003H32.9576L49.1538 64.6552C49.1538 64.6552 48.5732 37.4686 49.1538 34.8993C49.7345 32.3299 51.9788 30.5677 53.2971 30.5677C54.6154 30.5677 93.9761 30.5677 93.9761 30.5677L93.4111 29.2494H87.7613V18.5146C87.7613 18.5146 85.9244 11.9746 82.6764 9.66317C80.4025 8.04499 78.6875 7.40323 75.8965 7.40323C73.1056 7.40323 71.3496 7.98879 69.1167 9.66317C66.0115 11.9917 65.489 14.7373 64.5968 18.5146C63.7346 22.1651 64.5968 28.1194 64.5968 28.1194H57.0637C57.0637 28.1194 57.0637 20.2096 57.0637 15.5014C61.0242 4.51206 65.148 1.3374 75.8965 1C87.7613 1.00001 95.0912 11.3929 94.9178 15.5014L95.2944 30.756H96.9894C99.8349 31.2636 101.321 32.6393 102.074 35.0876L101.698 64.6552C100.124 69.346 98.6866 71.588 93.4111 73.695H79.4748L79.0981 62.7719H81.7347L79.4748 53.3555C79.4748 53.3555 81.619 51.9344 82.2997 50.5305C83.0405 49.0027 83.0995 47.8434 82.6764 46.199C82.229 44.4601 81.5887 43.3406 80.0398 42.4324C78.9934 41.8189 78.2395 41.6791 77.0265 41.6791C75.8136 41.6791 75.0486 41.8004 74.0133 42.4324C72.5158 43.3465 71.9806 44.4946 71.565 46.199C71.1627 47.8486 71.2197 48.9937 71.9416 50.5305C72.5832 51.8964 74.5782 53.3555 74.5782 53.3555L71.9416 62.0186H77.0265V73.695H59.3236L51.7904 67.1035V69.5518L58.0053 75.7666H109.796L120.154 60.7003H142" stroke="#FE5C32" stroke-width="1.12997"/>
                </svg> */}
            </Hero>
            <section className="why">
                {/* Make carousel and ferris wheel */}
                <div className="why__screenshot-canvas">
                    <img className="why__screenshot" src={AegisScreenshot} alt="aegis screenshots"/>
                </div>
                <div className="why__text-wrapper">
                    <h2 className="why__heading-secondary">Why Use Aegis?</h2>
                    <p className="why__text">Lorem Ipsum Text here. A secure platform for reporting, logging and tracking lost and found items. Intended to ease the process for clients and users alike.</p>
                    <p className="why__text">Lorem Ipsum Text here. A secure platform for reporting, logging and tracking lost and found items. Intended to ease the process for clients and users alike.</p>
                    <div className="why__icon-wrapper">
                        <div>
                            <img className="why__icon" src={FastIcon} alt="fast" />
                            <p className="why__icon-label">Fast</p>
                        </div>
                        <div>
                            <img className="why__icon" src={SecureIcon} alt="Secure" />
                            <p className="why__icon-label">Secure</p>
                        </div>
                        <div>
                            <img className="why__icon" src={SupportedIcon} alt="Supported" />
                            <p className="why__icon-label">Supported</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

    // return (
    //     <main className="about">
            
    //         <section className="team">
    //             <div className="team__wrapper">
    //                 <div className="team__column">
    //                     <h2 className="team__heading-secondary">The Team Behind It All</h2>
    //                     <p className="team__text">Lorem Ipsum Text here. A secure platform for reporting, logging and tracking lost and found items. Intended to ease the process for clients and users alike.</p>
    //                     <p className="team__text">Lorem Ipsum Text here. A secure platform for reporting, logging and tracking lost and found items. Intended to ease the process for clients and users alike.</p>
    //                 </div>
    //                 <div className="team__column">
    //                     <div className="team__canvas">
    //                         <img src={AboutTeamImg} alt="meet the team" />
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     </main>
    // );

}

export default About;