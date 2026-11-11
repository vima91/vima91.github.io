import { Download } from "lucide-react";

const roles = [
  { company: "Vosita", role: "Software Engineering Manager", dates: "Jan 2022 — Present", description: "Built a 15-person team and led architecture, hiring, and delivery. Modernized the healthcare platform and introduced shared AI engineering workflows.", current: true },
  { company: "Vosita", role: "Lead Software Engineer · Part-time", dates: "Jun 2020 — Dec 2021", description: "Designed the clinic integration layer and secured support for a platform rebuild. Concurrent with my full-time role at Thiqah." },
  { company: "Thiqah Business Services", role: "Senior Software Engineer", dates: "Aug 2020 — Dec 2021", description: "Contributed to four Saudi Vision 2030 projects, including a Ministry of Culture platform delivered in 90 days against a six-month estimate." },
  { company: "MCV", role: "Senior Software Engineer", dates: "Mar 2020 — Jun 2020", description: "Modernized a six-developer team’s toolchain: TFS to Git, consistent branching, cloud services, and structured delivery processes." },
  { company: "Evolvice GmbH", role: "Senior Software Engineer", dates: "Aug 2018 — Jan 2020", description: "Delivered five projects, two from scratch, with distributed teams across three time zones. Led one project from inception to launch and drove a .NET platform upgrade." },
  { company: "Maisonette", role: "Senior Software Engineer", dates: "Sep 2017 — Aug 2018", description: "Reduced build and release times by over 90% through automation, and improved recurring-job performance by over 70% with a new scheduling algorithm." },
  { company: "Vezeeta", role: "Software Engineer", dates: "Apr 2016 — Aug 2017", description: "Worked on a centralized REST API handling tens of thousands of daily scheduling, booking, and notification requests, using RabbitMQ and service consumers." },
  { company: "ComRec Solutions & HITS", role: "Junior Software Engineer", dates: "Dec 2014 — Mar 2016", description: "Built foundations in .NET hospital-management software, T-SQL, and reporting for HR and payroll systems." },
];

export function Experience() {
  return (
    <section id="experience" className="section wrap" aria-labelledby="experience-title">
      <div className="section-heading"><div><p className="eyebrow">03 / Experience</p><h2 id="experience-title">Engineer.<br />Lead. Manager.</h2></div><div><p>More than a decade building software, with increasing responsibility for the people and decisions behind it.</p><a className="text-link" href="/CV/Evram-Ehab-Resume.pdf" download="Evram-Ehab-Resume.pdf">The full resume <Download size={17} aria-hidden="true" /></a></div></div>
      <div className="timeline">{roles.map(r => <article key={r.company + r.role} className={r.current ? "career-row current" : "career-row"}><div className="career-date mono">{r.dates}{r.current && <span className="current-label">Current role</span>}</div><div><h3>{r.company}</h3><p className="career-role">{r.role}</p></div><p className="career-description">{r.description}</p></article>)}</div>
    </section>
  );
}
