export default function Schemes() {
  const data = [
    {
      title: "14 वा वित्त आयोग रस्ते विकास",
      status: "चालू आहे",
      desc: "क्रमांक / माहिती",
      location: "पिंपळनेर",
      budget: 120000,
    },
    {
      title: "पाणीपुरवठा योजना",
      status: "पूर्ण",
      desc: "पाणी पुरवठा सुधारणा",
      location: "पिंपळनेर",
      budget: 95000,
    },
  ];

  return (
    <section id="schemes" className="schemes-section">
      <h2>☑️ योजना व विकासकामे</h2>
      <p>गावातील विकास योजनांची माहिती</p>

      {data.map((s, i) => (
        <div className="scheme-card" key={i}>
          <div className="card-header">
            <h3>{s.title}</h3>
            <span className="status">{s.status}</span>
          </div>
          <p>{s.desc}</p>
          <div className="card-footer">
            <span>📍 {s.location}</span>
            <span>बजेट ₹{s.budget}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
