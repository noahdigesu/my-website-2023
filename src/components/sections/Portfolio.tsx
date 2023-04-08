import "./Projects.scss";

import {AnimatePresence, motion} from "framer-motion";
import React, {useEffect, useState} from "react";

import Project from "../cards/Project";
import Filter from "../buttons/Filter";

const variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
        }
    })
}

const portfolio = [
    {
        name: "Smoothey signup",
        year: 2023,
        background_color: "#3D396D",
        accent: "#252448",
        image: "smoothey-sign-up",
        theme: "light",
        url: "https://smoothey.app",
        category: ["design", "code"],
        filtered: true
    },
    {
        name: "Testing dashboard",
        year: 2022,
        background_color: "#F4FAFF",
        accent: "#6A6E72",
        image: "testing-dashboard",
        theme: "dark",
        url: "https://dribbble.com/shots/20449135-Testing-dashboard",
        category: ["design"],
        filtered: true
    },
    {
        name: "Links",
        year: 2022,
        background_color: "#f4ffaf",
        accent: "#8a8c61",
        image: "links",
        theme: "dark",
        url: "https://noahdigesu.com/links",
        category: ["design", "code"],
        filtered: true
    },
    {
        name: "Portfolio",
        year: 2021,
        background_color: "#f1d2fb",
        accent: "#d2a1de",
        image: "portfolio",
        theme: "dark",
        url: "",
        category: ["design", "code"],
        filtered: true
    },
];

function Projects() {
    const [filter, setFilter] = useState("code");
    const [projects, setProjects] = useState(portfolio);

    useEffect(() => {
        setProjects(portfolio);
    }, []);

    useEffect(() => {
        setProjects([]);

        const filtered = portfolio.map(p => ({
            ...p,
            filtered: p.category.includes(filter)
        }));
        setProjects(filtered);
    }, [filter]);

    return (
        <div className="section-projects" id="work">
            <div className="top">
                <h2 className="title">Work</h2>
                <div className="filters">
                    <div onClick={() => setFilter("code")}>
                        <Filter text="Code 👨‍💻" active={filter == "code"} theme="dark"/>
                    </div>
                    <div onClick={() => setFilter("design")}>
                        <Filter text="Design 🎨" active={filter == "design"} theme="dark"/>
                    </div>
                </div>
            </div>

            <motion.div className="projects"
                        initial="hidden"
                // whileInView="visible"
                        animate="visible"
                        variants={variants}
                // viewport={{once: true, margin: "-150px 0px -150px 0px"}}
            >
                <AnimatePresence>
                    {projects.map((project, i) =>
                        project.filtered ? (
                            <motion.div custom={i}
                                        variants={variants}
                                        key={project.name + i}
                                        layout
                                        exit={{opacity: 0, y: 20}}>
                                <Project
                                    name={project.name}
                                    year={project.year}
                                    background_color={project.background_color}
                                    accent={project.accent}
                                    image={project.image}
                                    theme={project.theme}
                                    url={project.url}
                                />
                            </motion.div>
                        ) : ""
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default Projects;
