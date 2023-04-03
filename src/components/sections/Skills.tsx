import "./Skills.scss";

import background from "../../images/backgrounds/footer.svg";

import {motion} from "framer-motion";

import Filter from "../buttons/Filter";
import Skill from "../cards/Skill";

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
    {name: "Laravel", category: "l-a-f", type: "Web", icon: "laravel"},
    {name: "JavaScript", category: "l-a-f", type: "Web", icon: "js"},
    {name: "SASS", category: "l-a-f", type: "Web", icon: "sass"},
    {name: "PHP", category: "l-a-f", type: "Web", icon: "php"},
    {name: "Spring", category: "l-a-f", type: "Web", icon: "spring"},
    {name: "Django", category: "l-a-f", type: "Web", icon: "django"},
    {name: "Node.js", category: "l-a-f", type: "Web", icon: "node"},
    {name: "REST APIs", category: "l-a-f", type: "Web", icon: "none"},
    {name: "Jest", category: "l-a-f", type: "Web", icon: "jest"},
    {
        name: "WebdriverIO",
        category: "l-a-f",
        type: "Web",
        icon: "webdriverio",
    },
    {name: "Kotlin", category: "l-a-f", type: "App", icon: "kotlin"},
    {name: "SQL", category: "l-a-f", type: "Other", icon: "none"},
    {name: "Java", category: "l-a-f", type: "Other", icon: "java"},
    {name: "Bash", category: "l-a-f", type: "Other", icon: "bash"},
    {name: "C++", category: "l-a-f", type: "Other", icon: "cpp"},
    {name: "C", category: "l-a-f", type: "Other", icon: "c"},
    {name: "Python", category: "l-a-f", type: "Other", icon: "python"},
];

function Skills() {
    return (
        <div
            className="section-skills"
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="top">
                <h2 className="title">Skills</h2>
                <div className="filters">
                    <Filter
                        text="Languages and frameworks 🤖"
                        active={true}
                        theme="light"
                    />
                    <Filter
                        text="Tools and technologies 🧰"
                        active={false}
                        theme="light"
                    />
                    <Filter
                        text="Methodologies 📜"
                        active={false}
                        theme="light"
                    />
                </div>
            </div>

            <motion.div className="skills"
                        initial="hidden"
                        whileInView="visible"
                        variants={variants}
                        viewport={{once: true, margin: "-150px 0px -150px 0px"}}>
                {skills.map((skill, i) => (
                    <motion.div custom={i}
                                variants={variants}>
                        <Skill
                            name={skill.name}
                            category={skill.category}
                            type={skill.type}
                            icon={skill.icon}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Skills;
