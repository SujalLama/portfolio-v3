import React from 'react'
import { AiOutlineDoubleRight } from "react-icons/ai";
import { HiChevronDoubleDown } from "react-icons/hi";
import { scrollToSection } from '../utils/scrollToSection';


const Landing = () => {
    return (
         <div className="landing" id="landing">
            <div className="content">
                <h1 className='heading--primary'>Full-Stack Developer</h1>
                <p className='paragraph--body'>Hi, I am Sujal. I love to design and code mobile and web app.</p>
            </div>
            
            <div className="horizontal-line"></div>

            <div className="technology-used">
            <span>React</span>
            <span>Node</span>
            <span>Flutter</span>
            </div>
            <div className="technology-used">
            <span>Sequelize</span>
            <span>MongoDb</span>
            </div>
            <div className="technology-used">
            <span>Html</span>
            <span>Css</span>
            <span>Sass</span>
            </div>
        
            <button className="btn btn--scroll-right scroll-right" onClick={() => scrollToSection('project')}>
                <span>scroll right</span>
                <AiOutlineDoubleRight />{" "}
            </button>
            <button className="btn btn--scroll-right scroll-down" onClick={() => scrollToSection('project')}>
                <span>scroll down</span>
                <HiChevronDoubleDown />{" "}
            </button>
    </div>
    )
}

export default Landing
