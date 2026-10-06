import { ArrowUpRight } from "lucide-react";

const principles = [
  ["01", "Build ownership.", "Hire thoughtfully, mentor engineers, and make room for specialists. At Vosita, I built the team and handed pipeline ownership to a dedicated DevOps team as it grew."],
  ["02", "Make decisions clear.", "Connect architecture choices to business needs. I secured support for Vosita’s rebuild by explaining the limits of the existing platform and the case for a new foundation."],
  ["03", "Make quality repeatable.", "Use code reviews, retrospectives, and shared engineering standards to improve how the team works. Extend those practices into AI workflows, with evidence and human review."],
];

export function Leadership() {
  return (
    <section id="leadership" className="leadership section" aria-labelledby="leadership-title">
      <div className="wrap">
        <div className="section-heading"><div><p className="eyebrow">02 / How I lead</p><h2 id="leadership-title">Good systems start<br />with good teams.</h2></div><p>The work includes the people doing it, the decisions behind it, and the way it reaches users.</p></div>
        <div className="leadership-grid">{principles.map(([n, title, copy]) => <article key={n}><div className="leadership-card-top mono"><span>{n}</span><ArrowUpRight size={25} aria-hidden="true" /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>
  );
}
