"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronDown, ExternalLink, Github, Stethoscope, Building2, Truck, Globe } from "lucide-react";

export function Projects() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isExpanded, setIsExpanded] = React.useState(false);

    const projects = [
        {
            icon: Stethoscope,
            title: "Vosita Healthcare Platform",
            featured: true,
            description: "Led the complete re-architecture of Vosita's healthcare platform, building a sophisticated integration solution connecting doctor clinic management systems with the main platform. Designed tiered microservices architecture serving as the central component of the business model.",
            achievements: [
                "Architected greenfield solution replacing legacy system",
                "Designed tiered integration layer for clinic software systems",
                "Led teams from inception to delivery using Agile methodologies",
                "Built scalable .NET backend with Entity Framework and SQL Server"
            ],
            technologies: [".NET", "C#", "Microservices", "SQL Server", "Azure", "Entity Framework"],
            link: "https://vosita.com",
            color: "from-primary to-accent"
        },
        {
            icon: Building2,
            title: "Saudi Government Solutions",
            description: "Delivered multiple projects for Saudi Arabia's 2030 Vision including the Ministry of Culture project, completed 90 days ahead of schedule using Xtreme Programming techniques.",
            achievements: [
                "Delivered ministry project in 90 days vs 6-month estimate",
                "Implemented authentication server standards",
                "Collaborated with flat-structured teams across 4 Vision 2030 projects"
            ],
            technologies: ["ABP.io", ".NET", "Azure DevOps", "Microsoft Stack"],
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Truck,
            title: "MCV Manufacturing Systems",
            description: "Led digital transformation initiative migrating from manual processes to modern Git-based workflows and cloud services for Egypt's largest commercial vehicle manufacturer.",
            achievements: [
                "Migrated from TFS to Git with organized repository structure",
                "Established development processes and team standards",
                "Implemented cloud services improving team productivity"
            ],
            technologies: ["Git", "Cloud Services", "Process Automation"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Globe,
            title: "International Client Projects",
            description: "Worked with German and Ukrainian teams delivering solutions for major European clients including Adidas, Volkswagen, Leoni, and Morgenstern.",
            achievements: [
                "Led projects achieving high customer satisfaction",
                "Managed multiple simultaneous international projects",
                "Developed food waste management system from scratch"
            ],
            technologies: ["Agile", "International Collaboration", "Full-Stack Development"],
            color: "from-green-500 to-emerald-500"
        },
    ];

    return (
        <section id="projects" className="py-20 sm:py-32" ref={ref}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section heading */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center font-[family-name:var(--font-space-grotesk)]">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>

                    {/* Expand/Collapse trigger */}
                    <div className="text-center mb-12">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="group glass-card px-6 py-4 hover:bg-primary/10 transition-all duration-300 inline-flex items-center gap-3"
                        >
                            <span className="text-lg font-semibold">
                                {isExpanded ? "Show Less" : "View Featured Projects"}
                            </span>
                            <ChevronDown
                                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Projects grid - collapsible */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="space-y-6">
                                    {projects.map((project, index) => {
                                        const Icon = project.icon;
                                        return (
                                            <motion.div
                                                key={project.title}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className={`glass-card hover:shadow-2xl hover:border-primary/30 transition-all duration-300 relative ${project.featured ? "border-2 border-primary/50" : ""
                                                    }`}
                                            >
                                                {/* Gradient background */}
                                                <div className={`absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l ${project.color} opacity-10 blur-3xl`} />

                                                <div className="relative">
                                                    {/* Featured badge */}
                                                    {project.featured && (
                                                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-accent px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                                                            <span className="text-white">⭐ Featured</span>
                                                        </div>
                                                    )}

                                                    <div className="flex items-start gap-4 mb-4">
                                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white`}>
                                                            <Icon className="w-8 h-8" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <h3 className="font-bold text-2xl">{project.title}</h3>
                                                                {project.link && (
                                                                    <a
                                                                        href={project.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-primary hover:text-accent transition-colors"
                                                                    >
                                                                        <ExternalLink className="w-5 h-5" />
                                                                    </a>
                                                                )}
                                                            </div>
                                                            <p className="text-muted-foreground mb-4">{project.description}</p>
                                                        </div>
                                                    </div>

                                                    {/* Achievements */}
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">Key Achievements:</h4>
                                                        <ul className="space-y-2">
                                                            {project.achievements.map((achievement, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm">
                                                                    <span className="text-accent mt-0.5">▸</span>
                                                                    <span className="flex-1">{achievement}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Technologies */}
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Summary when collapsed */}
                    {!isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center text-muted-foreground max-w-3xl mx-auto"
                        >
                            <p className="text-lg">
                                From healthcare platforms to government solutions and international enterprise projects,
                                I've delivered high-impact systems for diverse industries. Click above to explore my featured work.
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
