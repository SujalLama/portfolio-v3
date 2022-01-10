import React, {useState} from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Project from '../components/Project'
import Particles from "react-tsparticles";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
    const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
    return (
        <div className="home">
            <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: `${darkMode ? "#151515;" : "#3778c2"}`
            }
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: false, force: 60, smooth: 10 }
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              animation: {
                enable: true,
                speed: 0.05,
                sync: true,
                startValue: "max",
                count: 1,
                destroy: "min"
              },
              value: {
                min: 0,
                max: 0.5
              }
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          detectRetina: true
        }}
      />
            <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
            <div className="section">
                <Landing />
            </div>
            <div className="section">
                <Project darkMode={darkMode} />
            </div>
            <div className="section">
                <About />
            </div>
        </div>
    )
}

export default Home
