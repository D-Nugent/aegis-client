import './About.scss';

function About() {

    return (
        <main className="about">
            <section className="about__purpose">
                <svg className="hero__svg-curve-clip-path" viewBox="0 0 320 167">
                    <defs>
                        <clipPath id="svgPathTopCurve" clipPathUnits="objectBoundingBox">
                            <path d="M1 0C0.531574 0.0332416 0.571931 0.606902 0.439015 0.764107C0.310989 0.915528 0.166843 0.996916 0.0171744 0.999914H1V0Z" fill="#143058"/>
                        </clipPath>
                    </defs>
                </svg>
                <svg className="hero__svg-curve" preserveAspectRatio="none" viewBox="0 0 320 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M320 1C170.104 6.51009 183.018 101.599 140.485 127.658C99.5164 152.757 53.3898 166.248 5.49582 166.745H320V1Z" fill="#143058"/>
                    <path d="M5.49582 166.745C53.3898 166.248 99.5164 152.757 140.485 127.658C183.018 101.599 170.104 6.51009 320 1V166.745H5.49582ZM5.49582 166.745H0C1.8344 166.764 3.6664 166.764 5.49582 166.745Z" stroke="#143058" strokeWidth="0.250391"/>
                </svg>
            </section>
            <section className="about__why"></section>
        </main>
    );

}

export default About;