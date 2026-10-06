const categories = [
  ["Backend & architecture", ["C# / .NET", "ASP.NET Core", "Entity Framework Core", "REST APIs", "Integration layers", "Multi-client authentication"]],
  ["Cloud, data & delivery", ["Microsoft Azure", "Azure DevOps / CI/CD", "SQL Server / T-SQL", "RabbitMQ", "Git / Linux", "Monitoring"]],
  ["AI engineering workflows", ["Claude Code / Codex", "Shared skills & plugins", "Repository instructions", "Agent-assisted investigation", "Regression testing", "Human review"]],
] as const;

export function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="wrap"><div className="section-heading"><div><p className="eyebrow">04 / Technical foundation</p><h2 id="skills-title">Still close<br />to the code.</h2></div><p>My deepest experience is in the Microsoft stack, backend architecture, and delivery systems. Angular is part of my working knowledge.</p></div><div className="skills-grid">{categories.map(([title, skills], index) => <article key={title}><p className="mono skill-number">/ 0{index + 1}</p><h3>{title}</h3><ul>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div></div>
    </section>
  );
}
