import styles from './HomeItemUpdate.module.scss';

export default function HomeItemUpdate() {
  return (
    <div className={styles["update-wrapper"]}>
      <section className={styles["update"]}>
        <h2 className={styles["update__title"]}>Looking for an update?</h2>
        <div className={styles["reference"]}>
          <label htmlFor="referenceSearch" className={styles["reference__title"]}>
            Enter your reference number:
          </label>
          <div className={`${styles["reference__search-wrapper"]} search-bar`}>
            <input
              className={styles["reference__search"]}
              type="text"
              // Not using type="search" to avoid default styling
              name="referenceSearch" 
              placeholder="e.g. G69f3tu6"
              id="referenceSearch" />
            <button className={styles["reference__button"]}>Go</button>
          </div>
        </div>
      </section>
    </div>
  )
}
