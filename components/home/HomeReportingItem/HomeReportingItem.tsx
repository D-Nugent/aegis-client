import styles from './HomeReportingItem.module.scss';

export default function HomeReportingItem() {
  return (
    <section className={styles["reporting"]}>
      <h2 className={styles["reporting__title"]}>Reporting a Lost Item? <span className={styles["reporting__start"]}>Start Here.</span></h2>
      <div className={styles["location"]}>
        <label htmlFor="locationSearch" className={styles["location__title"]}>
          Hotel Location:
        </label>
        <div className={`${styles["location__search-wrapper"]} search-bar`}>
          <input
            className={styles["location__search"]}
            type="text"
            // Not using type="search" to avoid default styling
            name="locationSearch" 
            placeholder="Hotel Name"
            id="locationSearch" />
          <button className={styles["location__button"]}>Go</button>
        </div>
        <p className={styles["location__expl"]}>
          After selecting the location or business you'll be taken to our quick and easy form to submit your lost item query.
        </p>
      </div>
    </section>
  )
}
