import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";

const About = () => {
    return (
         <div className="about" id="about">
      <div className="author">
        <div className="img-wrapper">
          <img src="/images/me.jpg" alt="author" />
        </div>
      </div>
      <div className="content">
        <h1 className='heading--primary'>About me :)</h1>
        <div className="paragraph-wrapper">
          <p className='paragraph--body'>
            Hi, I am sujal lama. I am a full-stack developer situated at
            kathmandu, Nepal. I have one year of experience as a graphic
            designer and about 2 years of coding as a web and mobile developer.
          </p>

          <p className='paragraph--body'>
            Language I know is JavaScript and dart, and frameworks I use are
            react, express and flutter. However, I am not limited to these
            technologies and willing to learn new ones.
          </p>

          <p className='paragraph--body'>
            My core strengths are quick learning ability, problem-solving skill
            and patience. Coding aside, I enjoy reading and watching movies. I
            am also a Marvel fan.
          </p>
        </div>
        <div className="horizontal-line"></div>
        <div className="social-media-wrapper">
          <a className="icon" href="https://www.facebook.com/sujalballama" target="_blank">
            <FaFacebookF />
          </a>
          <a className="icon" href="https://www.linkedin.com/in/sujal-lama-aa6824196/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a className="icon" href="https://github.com/SujalLama" target="_blank">
            <FaGithubAlt />
          </a>
        </div>
      </div>
    </div>);
}

export default About
