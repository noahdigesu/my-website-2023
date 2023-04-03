import "./App.css";

import {motion} from "framer-motion";

import Header from "./components/sections/Header";
import Projects from "./components/sections/Portfolio";
import Skills from "./components/sections/Skills";

const fade = {
    visible: {
        opacity: 1,
        transition: {duration: 1},
    },
    hidden: {
        opacity: 0
    }
}

function App() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}>
            <Header/>
            <Projects/>
            <Skills/>
        </motion.div>
    );
}

export default App;
