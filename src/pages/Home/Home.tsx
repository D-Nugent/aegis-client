import React from 'react';
import './Home.scss';

// Component Will eventually be broken down into:
// <ReportingItem>
// <CheckingForUpdates>
//  About/FAQ part of Home
// <ContactUs>
// 
// 


function Home() {
    return (
      <main className="home">
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
                id="locationSearch" />
              <button className="location__button">Go</button>
            </div>
            <p className="location__expl">
              After selecting the location or business you'll be taken to our quick and easy form to submit your lost item query.
            </p>
          </div>
        </section>
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
                id="referenceSearch" />
              <button className="reference__button">Go</button>
            </div>
          </div>
        </section>
      </main>
    );
}

export default Home;