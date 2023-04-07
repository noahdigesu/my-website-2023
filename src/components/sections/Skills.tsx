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
        y: 0,
        transition: {
            delay: i * 0.1,
        },
    }),
}

const skills = [
    {name: "Laravel", category: "l-a-f", type: "Web", icon: "laravel", filtered: true},
    {name: "JavaScript", category: "l-a-f", type: "Web", icon: "js", filtered: true},
    {name: "SASS", category: "l-a-f", type: "Web", icon: "sass", filtered: true},
    {name: "PHP", category: "l-a-f", type: "Web", icon: "php", filtered: true},
    {name: "Spring", category: "l-a-f", type: "Web", icon: "spring", filtered: true},
    {name: "Django", category: "l-a-f", type: "Web", icon: "django", filtered: true},
    {name: "Node.js", category: "l-a-f", type: "Web", icon: "node", filtered: true},
    {name: "REST APIs", category: "l-a-f", type: "Web", icon: "none", filtered: true},
    {name: "Jest", category: "l-a-f", type: "Web", icon: "jest", filtered: true},
    {
        name: "WebdriverIO",
        category: "l-a-f",
        type: "Web",
        icon: "webdriverio",
        filtered: true
    },
    {name: "Kotlin", category: "l-a-f", type: "App", icon: "kotlin", filtered: true},
    {name: "SQL", category: "l-a-f", type: "Other", icon: "none", filtered: true},
    {name: "Java", category: "l-a-f", type: "Other", icon: "java", filtered: true},
    {name: "Bash", category: "l-a-f", type: "Other", icon: "bash", filtered: true},
    {name: "C++", category: "l-a-f", type: "Other", icon: "cpp", filtered: true},
    {name: "C", category: "l-a-f", type: "Other", icon: "c", filtered: true},
    {name: "Python", category: "l-a-f", type: "Other", icon: "python", filtered: true},
];

function Skills() {
    const [filter, setFilter] = useState("l-a-f");
    const [_skills, setSkills] = useState(skills);

    useEffect(() => {
        setSkills(skills);
    }, []);

    useEffect(() => {
        setSkills([]);

        const filtered = skills.map(p => ({
            ...p,
            filtered: p.category.includes(filter)
        }));
        setSkills(filtered);
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
                    {_skills.map((skill, i) =>
                        skill.filtered ? (
                            <motion.div custom={i}
                                        variants={variants}
                                        key={i}>
                                <Skill
                                    name={skill.name}
                                    category={skill.category}
                                    type={skill.type}
                                    icon={skill.icon}
                                />
                            </motion.div>
                        ) : ""
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
export default Skills;
