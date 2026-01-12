// import "./YojanaSection.css";

export default function YojanaSection() {
  return (
    <section className="yojana-section">
      {/* Header */}
      <div className="yojana-header">
        <h2>☰ योजना व विकासकामे</h2>
        <p>गावातील विकास योजनांची माहिती</p>
        <span className="divider"></span>
      </div>

      {/* Card */}
      <div className="yojana-card">
        <div className="card-top">
          <div className="icon-circle">📋</div>

          <div className="card-title">
            <h3>14 वा वित्त आयोग रस्ते विकास</h3>
            <span className="status">चालू आहे</span>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="card-divider"></div>

        <div className="card-bottom">
          <span className="location">📍 ABC XYZ</span>
          <div className="budget">
            <span>बजेट</span>
            <strong>₹XXXXX</strong>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="view-all">
        <button>→ सर्व योजना पहा</button>
      </div>
    </section>
  );
}
