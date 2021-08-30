import './HomeItemUpdate.scss';

export default function HomeItemUpdate() {
  return (
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
  )
}
