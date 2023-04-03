import "./Projects.scss";

import {motion} from "framer-motion";
import React from "react";

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
        },
    }),
}

const portfolio = [
    {
        name: "Smoothey signup",
        year: 2023,
        background_color: "#3D396D",
        image: "smoothey-sign-up",
        theme: "light",
        url: "",
        category: ["design", "code"]
    },
    {
        name: "Testing dashboard",
        year: 2022,
        background_color: "#F4FAFF",
        image: "testing-dashboard",
        theme: "dark",
        url: "",
        category: ["design"]
    },
    {
        name: "Portfolio",
        year: 2021,
        background_color: "#f1d2fb",
        image: "portfolio",
        theme: "dark",
        url: "",
        category: ["design", "code"]
    },
];

function Projects() {
    return (
        <div className="section-projects" id="work">
            <div className="top">
                <h2 className="title">Work</h2>
                <div className="filters">
                    <Filter text="Code 👨‍💻" active={true} theme="dark"/>
                    <Filter text="Design 🎨" active={false} theme="dark"/>
                    <Filter text="Articles 🗞" active={false} theme="dark"/>
                </div>
            </div>

            <motion.div className="projects"
                        initial="hidden"
                        whileInView="visible"
                        variants={variants}
                        viewport={{once: true, margin: "-150px 0px -150px 0px"}}>
                {portfolio.map((project, i) => (
                    <motion.div custom={i}
                                variants={variants}>
                        <Project
                            name={project.name}
                            year={project.year}
                            background_color={project.background_color}
                            image={project.image}
                            theme={project.theme}
                            url={project.url}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Projects;
