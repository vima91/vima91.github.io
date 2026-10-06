import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-topline mono">
        <span>Software Engineering Manager</span>
        <span>Cairo, Egypt / Working across borders</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-name">EVRAM EHAB<span className="accent-dot">.</span></p>
          <h1 id="hero-title">I build engineering teams <span className="highlight">that deliver.</span></h1>
          <p className="hero-description">Hands-on .NET and Azure expertise. Experience building teams, leading platform modernization, and improving how software gets delivered.</p>
          <div className="actions">
            <a className="button primary" href="#experience">View my experience <ArrowDown size={19} aria-hidden="true" /></a>
            <a className="button" href="/CV/Evrams-CV.pdf" download="Evram-Ehab-Resume.pdf">Download resume <Download size={19} aria-hidden="true" /></a>
          </div>
          <div className="hero-links mono">
            <a href="mailto:e@evram.me">Email me <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/evram-ehab/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <aside className="hero-note" aria-label="Current role at Vosita">
          <div className="note-heading mono"><span>Currently / Vosita</span><span aria-hidden="true">↗</span></div>
          <div className="note-body">
            <p className="mono note-kicker">Built from the ground up</p>
            <p className="team-number">0<span aria-hidden="true">→</span>15</p>
            <h2>A team. A platform.<br />A way of working.</h2>
            <p>Built a 15-person engineering team, owning architecture, hiring, and delivery for a US healthcare platform.</p>
            <div className="note-stack"><span>People &amp; ownership</span><span>Architecture &amp; integrations</span><span>Delivery &amp; engineering standards</span></div>
          </div>
          <a href="#vosita" className="note-link mono">The story behind the work <ArrowUpRight size={19} aria-hidden="true" /></a>
        </aside>
      </div>
      <div className="impact-strip" aria-label="Selected impact">
        <a href="#vosita"><strong>15<span> people</span></strong><span>Engineering team built from zero <ArrowUpRight size={17} aria-hidden="true" /></span></a>
        <a href="#vosita"><strong>Weeks <span>→</span> minutes</strong><span>Third-party integration rollout <ArrowUpRight size={17} aria-hidden="true" /></span></a>
        <a href="#thiqah"><strong>90<span> days</span></strong><span>Delivery against a six-month estimate <ArrowUpRight size={17} aria-hidden="true" /></span></a>
      </div>
    </section>
  );
}
