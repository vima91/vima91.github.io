import { ArrowUpRight, Plus } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section wrap" aria-labelledby="work-title">
      <div className="section-heading">
        <div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">Decisions.<br /><span className="text-accent">Then delivery.</span></h2></div>
        <p>A few examples of the teams, systems, and engineering practices I&apos;ve helped build.</p>
      </div>
      <article id="vosita" className="case-study flagship">
        <div className="case-banner"><span className="mono">01 / Healthcare</span><a href="https://vosita.com" target="_blank" rel="noopener noreferrer">Visit Vosita <ArrowUpRight size={18} aria-hidden="true" /></a></div>
        <div className="case-grid">
          <div>
            <p className="eyebrow">Vosita / Lead Engineer → Engineering Manager</p>
            <h3>Build the team.<br />Rebuild the platform.</h3>
            <p className="case-intro">A legacy platform needed a new foundation. I secured support for a rebuild, designed the replacement, and built the engineering team to deliver it.</p>
            <div className="tags"><span>Team building</span><span>.NET / Azure</span><span>API integrations</span></div>
          </div>
          <div className="case-facts">
            <div><span className="mono">My responsibility</span><p>Architecture, hiring, delivery, and engineering standards. From a part-time lead role in 2020 to Engineering Manager in 2022.</p></div>
            <div><span className="mono">What changed</span><p>A 15-person team. An integration layer connecting three clinic systems. Automated integration rollout reduced from weeks to minutes.</p></div>
            <div><span className="mono">Built to evolve</span><p>Led the rebuilt platform from .NET 5 through .NET 10, established CI/CD, and hired a dedicated DevOps team to take ownership.</p></div>
          </div>
        </div>
        <details className="case-details">
          <summary>Architecture &amp; leadership decisions <Plus size={20} aria-hidden="true" /></summary>
          <div className="detail-body">
            <p>I demonstrated the constraints of the legacy .NET Framework codebase and SQL database to secure executive approval for a fresh architecture. The new API integration layer connected clinic management systems to the platform and supported several thousand requests daily.</p>
            <p>A multi-client authentication server unified sign-in for web, mobile, the Hangfire admin console, and integration clients. Alongside the technical work, I introduced mandatory code reviews, sprint retrospectives, and mentorship, and worked with business, finance, and DevOps on healthcare security controls.</p>
          </div>
        </details>
      </article>
      <div className="case-pair">
        <article id="ai-workflows" className="case-study ai-case">
          <div className="case-banner"><span className="mono">02 / Engineering practice</span><span className="mono">Vosita</span></div>
          <div className="case-content">
            <h3>AI in the workflow.<br />Engineers in control.</h3>
            <p>I introduced shared repository instructions and a Git-backed skills and plugins catalog for Claude Code and Codex, giving the team repeatable workflows for investigation, implementation, and review.</p>
            <ol className="workflow" aria-label="Agent-assisted bug-fix workflow">
              {["Issue context", "Trace investigation", "Implementation", "Quality & regression checks", "Human review"].map((step, i) => <li key={step}><span className="mono">0{i + 1}</span>{step}</li>)}
            </ol>
            <p className="case-caption">Azure DevOps context → Seq traces → repository conventions → SonarQube findings and regression tests → human review.</p>
            <details className="case-details">
              <summary>How the workflow fits together <Plus size={20} aria-hidden="true" /></summary>
              <div className="detail-body">
                <p>The bug-fix workflow reads the defect, parent requirements, and related work; investigates correlation IDs and traces; then follows the target repository&apos;s conventions. Findings link back to evidence, tests include a documented rationale, and changes pass to an engineer for review.</p>
                <p>The same shared catalog supports feature intake, PR review, refactoring, test coverage, and codebase health. Human review remains an explicit boundary.</p>
              </div>
            </details>
          </div>
        </article>
        <article id="thiqah" className="case-study delivery-case">
          <div className="case-banner"><span className="mono">03 / Government delivery</span><span className="mono">Thiqah</span></div>
          <div className="case-content">
            <h3>A six-month estimate.<br />Delivered in 90 days.</h3>
            <p>As a Senior Software Engineer at Thiqah, I helped deliver a Ministry of Culture platform using Extreme Programming in a flat-structured team.</p>
            <div className="delivery-number" aria-label="90 days"><strong>90</strong><span className="mono">days<br />to delivery</span></div>
            <p>Across four Saudi Vision 2030 projects, my work combined Microsoft technologies, Azure DevOps, and ABP.io.</p>
            <div className="tags"><span>Extreme Programming</span><span>.NET</span><span>ABP.io</span></div>
            <details className="case-details">
              <summary>Role &amp; delivery context <Plus size={20} aria-hidden="true" /></summary>
              <div className="detail-body"><p>This was a full-time Senior Software Engineer role from August 2020 to December 2021, alongside my part-time work at Vosita. The 90-day delivery was a team outcome; my contribution was hands-on engineering within that team.</p></div>
            </details>
          </div>
        </article>
      </div>
    </section>
  );
}
