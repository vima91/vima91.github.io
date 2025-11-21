"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronDown, Code2, Database, Cloud, GitBranch, Workflow, Terminal } from "lucide-react";

export function Skills() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isExpanded, setIsExpanded] = React.useState(false);

    const skillCategories = [
        {
            icon: Code2,
            title: "Backend Development",
            skills: [".NET", "C#", "ASP.NET Core", "Entity Framework", "RESTful APIs", "Microservices"],
            color: "text-primary"
        },
        {
            icon: Terminal,
            title: "Frontend Development",
            skills: ["React", "Next.js", "TypeScript", "JavaScript", "Angular", "HTML/CSS"],
            color: "text-accent"
        },
        {
            icon: Database,
            title: "Databases & Data",
            skills: ["SQL Server", "PostgreSQL", "T-SQL", "Azure Data Studio", "Entity Framework", "Redgate"],
            color: "text-purple-500"
        },
        {
            icon: Cloud,
            title: "Cloud & DevOps",
            skills: ["Azure", "CI/CD", "Docker", "Azure DevOps", "Linux", "Windows Server"],
            color: "text-blue-500"
        },
        {
            icon: GitBranch,
            title: "Tools & Version Control",
            skills: ["Git", "GitHub", "TFS", "SVN", "JetBrains Suite", "Atlassian Suite"],
            color: "text-orange-500"
        },
        {
            icon: Workflow,
            title: "Architecture & Methodologies",
            skills: ["Microservices", "Design Patterns", "Agile", "Scrum", "Xtreme Programming", "TDD"],
            color: "text-green-500"
        },
    ];

    return (
        <section id="skills" className="py-20 sm:py-32 bg-muted/20" ref={ref}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section heading */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center font-[family-name:var(--font-space-grotesk)]">
                        Skills & <span className="gradient-text">Technologies</span>
                    </h2>

                    {/* Expand/Collapse trigger */}
                    <div className="text-center mb-12">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="group glass-card px-6 py-4 hover:bg-primary/10 transition-all duration-300 inline-flex items-center gap-3"
                        >
                            <span className="text-lg font-semibold">
                                {isExpanded ? "Show Less" : "View All Skills & Technologies"}
                            </span>
                            <ChevronDown
                                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Skills grid - collapsible */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {skillCategories.map((category, index) => {
                                        const Icon = category.icon;
                                        return (
                                            <motion.div
                                                key={category.title}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className="glass-card hover:shadow-2xl hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                                            >
                                                <div className="flex items-center gap-3 mb-4">
                                                    <Icon className={`w-6 h-6 ${category.color}`} />
                                                    <h3 className="font-semibold text-lg">{category.title}</h3>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {category.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
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
                                Extensive experience across the full technology stack including .NET, React, Azure,
                                SQL Server, and modern DevOps practices. Proficient in microservices architecture,
                                agile methodologies, and both frontend and backend development.
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
