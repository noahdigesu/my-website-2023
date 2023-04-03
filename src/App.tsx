import "./App.css";

import {motion} from "framer-motion";

import Header from "./components/sections/Header";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

const fade = {
    visible: {
        opacity: 1
    },
    hidden: {
        opacity: 0,
        transition: {duration: 2},
        transitionEnd: {display: "none"}
    }
}

function App() {
    return (
        <>
            <motion.div className="fade"
                        initial="visible"
                        animate="hidden"
                        variants={fade}
            />
            <Header/>
            <Projects/>
            <Skills/>
        </>
    );
}

export default App;
