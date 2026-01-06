export default function Content() {
  return (<>    <section className="featured section">
      <div className="container">
        <h2>Happy Costumers</h2>
        <p>High quality properties with sea view.</p>
      </div>
    </section>
     <section className="properties section">
      <div className="container">
        <h2>Our Properties</h2>
        <div className="property-grid">
          <div className="property-card">
            <img src="/assets/images/property-01.jpg" alt="Property" />
            <h4>Luxury Villa</h4>
            <p>$2,264,000</p>
          </div>
        </div>
      </div>
    </section>
    </>

  );
}
