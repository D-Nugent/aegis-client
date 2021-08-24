import './About.scss';

function About() {

    return (
        <main className="about-page">
            <section className="about-page__section">
                <header className="about-page__header">
                    <h1 className="about-page__title">About Aegis</h1>
                    <h2 className="about-page__secondary-heading about-page__secondary-heading--emphasis">Mission Statement Goes Here For Impact</h2>
                </header>
                <div>
                    <div>
                        <h2 className="about-page__secondary-heading">Our Purpose</h2>
                        <p className="about-page__text">Lorem Ipsum Text here. A secure platform for reporting, logging and tracking lost and found items. Intended to ease the process for clients and users alike.</p>
                        <p className="about-page__text">Lorem Ipsum Text here. A secure platform for reporting, logging and tracking lost and found items. Intended to ease the process for clients and users alike.</p>
                    </div>
                    <div>
                        <svg width="142" height="77" viewBox="0 0 142 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 60.7003H32.9576L49.1538 64.6552C49.1538 64.6552 48.5732 37.4686 49.1538 34.8993C49.7345 32.3299 51.9788 30.5677 53.2971 30.5677C54.6154 30.5677 93.9761 30.5677 93.9761 30.5677L93.4111 29.2494H87.7613V18.5146C87.7613 18.5146 85.9244 11.9746 82.6764 9.66317C80.4025 8.04499 78.6875 7.40323 75.8965 7.40323C73.1056 7.40323 71.3496 7.98879 69.1167 9.66317C66.0115 11.9917 65.489 14.7373 64.5968 18.5146C63.7346 22.1651 64.5968 28.1194 64.5968 28.1194H57.0637C57.0637 28.1194 57.0637 20.2096 57.0637 15.5014C61.0242 4.51206 65.148 1.3374 75.8965 1C87.7613 1.00001 95.0912 11.3929 94.9178 15.5014L95.2944 30.756H96.9894C99.8349 31.2636 101.321 32.6393 102.074 35.0876L101.698 64.6552C100.124 69.346 98.6866 71.588 93.4111 73.695H79.4748L79.0981 62.7719H81.7347L79.4748 53.3555C79.4748 53.3555 81.619 51.9344 82.2997 50.5305C83.0405 49.0027 83.0995 47.8434 82.6764 46.199C82.229 44.4601 81.5887 43.3406 80.0398 42.4324C78.9934 41.8189 78.2395 41.6791 77.0265 41.6791C75.8136 41.6791 75.0486 41.8004 74.0133 42.4324C72.5158 43.3465 71.9806 44.4946 71.565 46.199C71.1627 47.8486 71.2197 48.9937 71.9416 50.5305C72.5832 51.8964 74.5782 53.3555 74.5782 53.3555L71.9416 62.0186H77.0265V73.695H59.3236L51.7904 67.1035V69.5518L58.0053 75.7666H109.796L120.154 60.7003H142" stroke="#FE5C32" stroke-width="1.12997"/>
                        </svg>
                    </div>
                </div>
            </section>
            <section className="about-page__section about-page__section--alt">
                <div className="about-page__preview-container">
                    <img src={"#"} alt="Preview of App in Action" />
                </div>
                <h2 className="about-page__secondary-heading">Why Use Aegis?</h2>
                <div className="about-page__why-container">
                    <div>
                        <p className="about-page__text about-page__text--alt">Lorem Ipsum Text here. A secure platform for reporting, logging and tracking lost and found items. Intended to ease the process for clients and users alike.</p>
                        <p className="about-page__text about-page__text--alt">Lorem Ipsum Text here. A secure platform for reporting, logging and tracking lost and found items. Intended to ease the process for clients and users alike.</p>
                    </div>
                    <div>
                        <ul className="about-page__why-items">
                            <li className="about-page__why-item">
                                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 0H8V2.66667H16V0ZM10.6667 17.3333H13.3333V9.33333H10.6667V17.3333ZM21.3733 8.52L23.2667 6.62667C22.6933 5.94667 22.0667 5.30667 21.3867 4.74667L19.4933 6.64C17.4267 4.98667 14.8267 4 12 4C5.37333 4 0 9.37333 0 16C0 22.6267 5.36 28 12 28C18.64 28 24 22.6267 24 16C24 13.1733 23.0133 10.5733 21.3733 8.52ZM12 25.3333C6.84 25.3333 2.66667 21.16 2.66667 16C2.66667 10.84 6.84 6.66667 12 6.66667C17.16 6.66667 21.3333 10.84 21.3333 16C21.3333 21.16 17.16 25.3333 12 25.3333Z" fill="#FBA919"/>
                                </svg>
                                <p className="about-page__why-text">Fast</p>
                            </li>
                            <li className="about-page__why-item">
                                <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10.5H19.5V7.5C19.5 3.36 16.14 0 12 0C7.86 0 4.5 3.36 4.5 7.5V10.5H3C1.35 10.5 0 11.85 0 13.5V28.5C0 30.15 1.35 31.5 3 31.5H21C22.65 31.5 24 30.15 24 28.5V13.5C24 11.85 22.65 10.5 21 10.5ZM12 24C10.35 24 9 22.65 9 21C9 19.35 10.35 18 12 18C13.65 18 15 19.35 15 21C15 22.65 13.65 24 12 24ZM16.65 10.5H7.35V7.5C7.35 4.935 9.435 2.85 12 2.85C14.565 2.85 16.65 4.935 16.65 7.5V10.5Z" fill="#FBA919"/>
                                </svg>
                                <p className="about-page__why-text">Secure</p>

                            </li>
                            <li className="about-page__why-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.6667 16.6667C21 16.6667 19.4 16.4 17.9067 15.9067C17.44 15.76 16.92 15.8667 16.5467 16.2267L13.6133 19.16C9.84 17.24 6.74667 14.16 4.82667 10.3733L7.76 7.42667C8.13333 7.08 8.24 6.56 8.09333 6.09333C7.6 4.6 7.33333 3 7.33333 1.33333C7.33333 0.6 6.73333 0 6 0H1.33333C0.6 0 0 0.6 0 1.33333C0 13.8533 10.1467 24 22.6667 24C23.4 24 24 23.4 24 22.6667V18C24 17.2667 23.4 16.6667 22.6667 16.6667ZM21.3333 12H24C24 5.37333 18.6267 0 12 0V2.66667C17.16 2.66667 21.3333 6.84 21.3333 12ZM16 12H18.6667C18.6667 8.32 15.68 5.33333 12 5.33333V8C14.2133 8 16 9.78667 16 12Z" fill="#FBA919"/>
                                </svg>
                                <p className="about-page__why-text">Supported</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>    
            <section className="about-page__section about-page__section--alt">
                <h2 className="about-page__secondary-heading">The Team Behind It All</h2>
                <p className="about-page__text about-page__text--alt">Lorem Ipsum Text here. A secure platform for reporting, logging and tracking lost and found items. Intended to ease the process for clients and users alike.</p>
                <p className="about-page__text about-page__text--alt">Lorem Ipsum Text here. A secure platform for reporting, logging and tracking lost and found items. Intended to ease the process for clients and users alike.</p>
                <div className="about-page__profile-container">
                    <img className="about-page__profile-img" src={"#"} alt="David Nugent" />
                    <img className="about-page__profile-img" src={"#"} alt="James King" />
                </div>
            </section>
            {/* Return to Top Button */}
        </main>
    );

}

export default About;