import './ReportingItem.scss';

export default function ReportingItem() {
  return (
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
  )
}
