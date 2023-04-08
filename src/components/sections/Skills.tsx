import "./Skills.scss";

import background from "../../images/backgrounds/footer.svg";

import {AnimatePresence, motion} from "framer-motion";

import Filter from "../buttons/Filter";
import Skill from "../cards/Skill";
import React, {useEffect, useState} from "react";

const variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: (i: number) => ({
        opacity: 1,
        y: -20,
        transition: {
            delay: i * 0.1,
        },
    }),
}

const skills = [
    {name: "Laravel", category: ["l-a-f"], type: "Web", icon: "laravel", filtered: true},
    {name: "JavaScript", category: ["l-a-f"], type: "Web", icon: "js", filtered: true},
    {name: "SASS", category: ["l-a-f"], type: "Web", icon: "sass", filtered: true},
    {name: "PHP", category: ["l-a-f"], type: "Web", icon: "php", filtered: true},
    {name: "Spring", category: ["l-a-f"], type: "Web", icon: "spring", filtered: true},
    {name: "Django", category: ["l-a-f"], type: "Web", icon: "django", filtered: true},
    {name: "Node.js", category: ["l-a-f"], type: "Web", icon: "node", filtered: true},
    {name: "REST APIs", category: ["l-a-f"], type: "Web", icon: "none", filtered: true},
    {name: "Jest", category: ["l-a-f"], type: "Web", icon: "jest", filtered: true},
    {
        name: "WebdriverIO",
        category: ["l-a-f"],
        type: "Web",
        icon: "webdriverio",
        filtered: true
    },
    {name: "SQL", category: ["l-a-f"], type: "Database", icon: "none", filtered: true},
    {name: "Kotlin", category: ["l-a-f"], type: "App", icon: "kotlin", filtered: true},
    {name: "Java", category: ["l-a-f"], type: "Software", icon: "java", filtered: true},
    {name: "C++", category: ["l-a-f"], type: "Software", icon: "cpp", filtered: true},
    {name: "C", category: ["l-a-f"], type: "Software", icon: "c", filtered: true},
    {name: "Bash", category: ["l-a-f"], type: "Scripting", icon: "bash", filtered: true},
    {name: "Python", category: ["l-a-f"], type: "Scripting", icon: "python", filtered: true},

    {name: "Linux", category: ["t-a-t"], type: "OS", icon: "tux", filtered: false},
    {name: "Windows", category: ["t-a-t"], type: "OS", icon: "windows", filtered: false},
    {name: "AWS", category: ["t-a-t"], type: "Cloud", icon: "aws", filtered: false},
    {name: "Figma", category: ["t-a-t"], type: "Design", icon: "figma", filtered: false},
    {name: "GitHub", category: ["t-a-t"], type: "VCS", icon: "github", filtered: false},
    {name: "GitLab", category: ["t-a-t"], type: "VCS", icon: "gitlab", filtered: false},
    {name: "Bitbucket", category: ["t-a-t"], type: "VCS", icon: "bitbucket", filtered: false},
    {name: "Confluence", category: ["t-a-t"], type: "Documentation", icon: "confluence", filtered: false},
    {name: "Jira", category: ["t-a-t"], type: "Management", icon: "jira", filtered: false},
    {name: "Ansible", category: ["t-a-t"], type: "IaC", icon: "ansible", filtered: false},
    {name: "Docker", category: ["t-a-t"], type: "Containerization", icon: "docker", filtered: false},
    {name: "Adobe XD", category: ["t-a-t"], type: "Photography", icon: "xd", filtered: false},

    {name: "CI/CD", category: ["methodologies"], type: "Methodology", icon: "none", filtered: false},
    {name: "DevOps", category: ["methodologies"], type: "Methodology", icon: "none", filtered: false},
    {name: "Scrum", category: ["methodologies"], type: "Methodology", icon: "none", filtered: false},
    {name: "eXtreme programming", category: ["methodologies"], type: "Methodology", icon: "none", filtered: false},
    {name: "Pair programming", category: ["methodologies"], type: "Methodology", icon: "none", filtered: false},
];

function Skills() {
    const [filter, setFilter] = useState("l-a-f");
    const [_skills, setSkills] = useState(skills);

    useEffect(() => {
        setSkills([]);

        setSkills(skills.filter(
            skill => skill.category.includes(filter)
        ));
    }, [filter]);

    return (
        <div
            className="section-skills"
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="top">
                <h2 className="title">Skills</h2>
                <div className="filters">
                    <div onClick={() => {
                        if (filter != "code") setFilter("l-a-f")
                    }}>
                        <Filter
                            text="Languages and frameworks 🤖"
                            active={filter == "l-a-f"}
                            theme="light"
                        />
                    </div>
                    <div onClick={() => {
                        if (filter != "code") setFilter("t-a-t")
                    }}>
                        <Filter
                            text="Tools and technologies 🧰"
                            active={filter == "t-a-t"}
                            theme="light"
                        />
                    </div>
                    <div onClick={() => {
                        if (filter != "code") setFilter("methodologies")
                    }}>
                        <Filter
                            text="Methodologies 📜"
                            active={filter == "methodologies"}
                            theme="light"
                        />
                    </div>
                </div>
            </div>

            <motion.div className="skills"
                        initial="hidden"
                // whileInView="visible"
                        animate="visible"
                        variants={variants}
                // viewport={{once: true, margin: "-150px 0px -150px 0px"}}
            >
                <AnimatePresence>
                    {_skills.map((skill, i) => (
                        <motion.div custom={i}
                                    variants={variants}
                                    key={skill.name + i}>
                            <Skill
                                name={skill.name}
                                type={skill.type}
                                icon={skill.icon}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default Skills;
