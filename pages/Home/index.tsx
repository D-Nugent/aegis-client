import styles from './Home.module.scss';
import ReturnToTop from '../../components/ReturnToTop/ReturnToTop';
import HomeContactUs from '../../components/HomeContactUs/HomeContactUs';
import HomeReportingItem from '../../components/HomeReportingItem/HomeReportingItem';
import HomeItemUpdate from '../../components/HomeItemUpdate/HomeItemUpdate';
import DrawableSVG from '../../components/DrawableSVG/DrawableSVG';
import Link from 'next/link';
import { ROUTE } from '../../types/routes';

function Home() {
  return (
    <>
    <main className={styles.home}>
      <section className={styles['user-prompts']}>
        <HomeReportingItem/>
        <svg className={styles['svg__top-curve--clip-path']} viewBox="0 0 320 167">
          <defs>
            <clipPath id="svgPathTopCurve" clipPathUnits="objectBoundingBox">
              <path d="M1 0C0.531574 0.0332416 0.571931 0.606902 0.439015 0.764107C0.310989 0.915528 0.166843 0.996916 0.0171744 0.999914H1V0Z" fill="#143058"/>
            </clipPath>
          </defs>
        </svg>
        <svg className={styles['svg__top-curve']} preserveAspectRatio="none" viewBox="0 0 320 167" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M320 1C170.104 6.51009 183.018 101.599 140.485 127.658C99.5164 152.757 53.3898 166.248 5.49582 166.745H320V1Z" fill="#143058"/>
          <path stroke="#143058" strokeWidth="0.250391" d="M5.49582 166.745C53.3898 166.248 99.5164 152.757 140.485 127.658C183.018 101.599 170.104 6.51009 320 1V166.745H5.49582ZM5.49582 166.745H0C1.8344 166.764 3.6664 166.764 5.49582 166.745Z"/>
        </svg>
      <HomeItemUpdate/>
      </section>
      <div className={styles["about-intro-wrapper"]}>
        <section className={styles["about-intro"]}>
          <h2 className={styles["about-intro__title"]}>Aegis is...</h2>
          <div className={styles["about-intro__summary"]}>
            <p className={styles["about-intro__msg"]}>
              A secure platform for reporting, logging and tracking lost and found items. By enhancing
              the communication process the interface eases the process for clients and hotel guests alike. 
            </p>
            <Link href={ROUTE.ABOUT}>
              <a className={styles["about-intro__more"]}>
              Learn More
              <svg className={styles["svg-icon__chevron"]} viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="14.7736" height="3.21165" transform="matrix(0.664353 0.747419 -0.664353 0.747419 2.18512 0)" fill="#FE5C32"/>
                <rect width="14.7736" height="3.21165" transform="matrix(0.664353 -0.747419 0.664353 0.747419 0 19.5995)" fill="#FE5C32"/>
              </svg>
              </a>
            </Link>
          </div>
        </section>
        <DrawableSVG type="lock"/>
        <aside className={styles["about-intro-image"]}>
          <svg className={styles["svg__about--clip-path"]} viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="svgPathAbout" clipPathUnits="objectBoundingBox">
                <path d="M0.522313 0.351131C0.440611 0.528648 -0.218841 0.556404 0.0748971 0.725826C0.119428 0.747896 0.185782 0.74898 0.185782 0.782321C0.185782 0.797597 0.177752 0.797597 0.194885 0.808099C0.212018 0.818601 0.327106 0.831967 0.341559 0.833877C0.391344 0.841515 0.630631 0.851062 0.852252 0.902618C0.946407 0.921085 0.998684 0.969404 1 1V0C0.925239 0.0419395 0.655969 0.0607313 0.604015 0.173614L0.522313 0.351131Z" fill="none"/>
              </clipPath>
            </defs>
          </svg>
        </aside>
      </div>
      <div className={styles["faq-intro-wrapper"]}> 
        <aside className={styles["faq-intro-image"]}>
          <svg className={styles["svg__faq--clip-path"]} viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="svgPathFaq" clipPathUnits="objectBoundingBox">
                <path d="M0.288531 0.31495C0.347904 0.431728 0.444537 0.428472 0.783303 0.443138C1.12207 0.457803 0.96241 0.633741 0.96241 0.633741C0.96241 0.633741 0.823742 0.716902 0.858508 0.788774C0.960334 0.895794 0.0467701 0.819719 0 1L0.00328947 0.0751689C0.475301 -0.152347 0.229159 0.198172 0.288531 0.31495Z" fill="none"/>
              </clipPath>
            </defs>
          </svg>
        </aside>
        <DrawableSVG type="question-mark"/>
        <section className={styles["faq-intro"]} id="faq-intro">
          <h2 className={styles["faq-intro__title"]}>FAQ's</h2>
          <div className={styles["faq-intro__summary"]}>
            <p className={styles["faq-intro__msg"]}>
              We all have questions from time-to-time. Not a problem! We're here to help. So that we can
              best assist you, are you a client or a hotel guest? 
            </p>
            <div className={styles["faq-intro__link-wrapper"]}>
              <Link href={ROUTE.FAQS}>
                <a className={`${styles["faq-intro__link"]} button--primary`}>Client</a>
              </Link>
              <Link href={ROUTE.FAQS}>
                <a className={`${styles["faq-intro__link"]} button--secondary`}>Guest</a>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <section className={styles["contact-us"]}>
        <DrawableSVG type="phone"/>
        <HomeContactUs/>
      </section>
    </main>
    <ReturnToTop/>
    </>
  );
}

export default Home;