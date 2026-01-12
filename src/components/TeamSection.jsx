// import "./TeamSection.css";
import { members } from "../utils/membersData.js";

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-header">
        <h2>👥 ग्रामपंचायत मंडळ अधिकारी/कर्मचारी</h2>
        <p>आमचे नेतृत्व व कर्मचारी</p>
        <span className="divider"></span>
      </div>

      <div className="card-container">
        {members.map((m, i) => (
          <div className="member-card" key={i}>
            <img src={m.img} alt={m.name} />
            <h3>{m.name}</h3>
            <span className="role">{m.role}</span>

            <div className="info">
              <p>📞 {m.phone}</p>
              <p>✉️ {m.email}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all">
        <button>→ सर्व सदस्य पहा</button>
      </div>
    </section>
  );
}
