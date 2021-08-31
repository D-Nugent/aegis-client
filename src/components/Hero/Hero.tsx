import './Hero.scss';
import { ReactNode } from 'react';

type Props = {
    children : ReactNode,
    classes? : string
};

function Hero({ classes, children } : Props) {

    return (
        <section className="hero">
            <div className={classes}>
                { children }
            </div>
            <svg className="svg-hero__curve" preserveAspectRatio="none" viewBox="0 0 320 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M320 1C170.104 6.51009 183.018 101.599 140.485 127.658C99.5164 152.757 53.3898 166.248 5.49582 166.745H320V1Z" fill="#143058"/>
                <path d="M5.49582 166.745C53.3898 166.248 99.5164 152.757 140.485 127.658C183.018 101.599 170.104 6.51009 320 1V166.745H5.49582ZM5.49582 166.745H0C1.8344 166.764 3.6664 166.764 5.49582 166.745Z" stroke="#143058" strokeWidth="0.250391"/>
            </svg>
        </section>
    );

}

export default Hero;