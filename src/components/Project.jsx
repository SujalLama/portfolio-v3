import React, {useState} from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import Modal from './Modal';

const webProjects = [
  {
    id: 1,
    name: "PlanetFarm",
    image: "./images/planet.jpg",
    about: "Planet Farms is a system built in PERN Stack. This stack consists of PostgreSQL, Express, React and Node.js",
    technology: "PERN",
    features: ['authentication', 'community CRUD', 'course CRUD', "enterprise CRUD", "Test creation and enrollment"],
    github: "https://github.com/earthowned/planetfarms",
    website: "",
  },
  {
    id: 2,
    name: "Bishwo Bhasa",
    image: "./images/bishwo-bhasa.jpg",
    about: "This app is designed for bishwobhawsa consultancy. This app allows the students to enroll in EPS test and also allows the admin to create tests.",
    technology: "Sequelize, Express, React, Postgres",
    features: ['authentication', 'authorization', 'test CRUD', "test enrollment"],
    github: "https://gitlab.com/SujalLama/bishwo-bhasa",
    website: "",
  },
  {
    id: 3,
    name: "Digital Classroom",
    image: "./images/classroom.JPG",
    about: "This app is the representation of the online learning platform. User can sign in and enroll in the classroom. They can also be teacher and add their own course material.",
    technology: "MongoDb, Express, React, Node",
    features: ['authentication', 'course creation', 'course enrollment', "profile update"],
    github: "https://github.com/SujalLama/online-class",
    website: "https://digital-class.netlify.app/",
  },
  {
    id: 4,
    name: "Digital Marketplace",
    image: "./images/market.JPG",
    about: "This app is the representation of the online markeplace where you can enlist your products and sell them. It also has bidding system where you can create a bid for a particular service or product.",
    technology: "MongoDb, Express, React, Node",
    features: ['authentication', 'products CRUD', 'bidding', "profile update"],
    github: "https://github.com/SujalLama/online-marketplace",
    website: "https://digital-market.netlify.app/",
  },
  {
    id: 5,
    name: "Expense Tracker",
    image: "./images/expense.JPG",
    about: "With this application, you can store your monthly expenses. You can look at various graphical tools to analyse your expense habit.",
    technology: "MongoDb, Express, React, Node",
    features: ['authentication', 'expenses CRUD', "profile update", "monthly report"],
    github: "https://github.com/SujalLama/expense-tracker",
    website: "https://track-expense-101.netlify.app/",
  },
  {
    id: 6,
    name: "Social Media",
    image: "./images/mern.JPG",
    about: "As the name suggests, this is the representation of social media platform. User can create post, like and comment. They can also follow people.",
    technology: "MongoDb, Express, React, Node",
    features: ['authentication', 'post CRUD', "profile update", "follow, like, comment"],
    github: "https://github.com/SujalLama/social-media-app",
    website: "",
  },
]

const mobProjects = [
  {
    id: 8,
    name: "Fohor Malai Client",
    image: "./images/fohor-malai.jpg",
    github: "",
    website: "",
    about: "This mobile app was developed to notify users about the trash day.",
    technology: "Flutter",
    features: ['Phone authentication', 'notification', 'notice', "donation", "campaign participation", "location tracking"],
  },
  {
    id: 9,
    name: "Fohor Malai Driver",
    image: "./images/fohor-malai.jpg",
    github: "",
    website: "",
    about: "This mobile app was developed for users of the organization to get the info about work schedules and track their vehicles.",
    technology: "Flutter",
    features: ['Phone authentication', 'notification', 'notice', "donation", "campaign participation", "location tracking", "scheduling"],
  },
  {
    id: 10,
    name: "Fohor Malai Admin",
    image: "./images/fohor-malai-admin.jpg",
    github: "",
    website: "",
    about: "This app is the admin panel for the fohor malai mobile application.",
    technology: "Flutter Web",
    features: ['authentication', "campaign CRUD", "notification creation for notices", "scheduling timetable"],
  },
]

const Project = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [detail, setDetail] = useState({});
  function showModal(id, type) {
    if(type === "web") {
        setDetail(...webProjects.filter(item => item.id === id))
    }

    if(type === "mob") {
      setDetail(...mobProjects.filter(item => item.id === id));
    }

    setOpenModal(true);
  }
    return (
         <div className="project" id="project">
           {openModal && <Modal detail={detail} closeModal={() => setOpenModal(false)} />}
      <div className="project-head">
        <h3 className={`heading--project ${openMobile || 'active'}`} onClick={() => setOpenMobile(false)}>Web Apps</h3>
        <h3 className={`heading--project ${openMobile && 'active'}`} onClick={() => setOpenMobile(true)}>Mobile Apps</h3>
      </div>
      <div className="projects">
        <div className="cards">
            {openMobile || webProjects.map((item) => {
              return (
                <div className="card" key={item.id}>
                <div className="img-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="content">{item.name}</div>
                <div className="btn-grps">
                  <div className="btn" onClick={() => showModal(item.id, "web")}>
                    <AiFillEye />
                  </div>
                  {item.github && <a className="btn link-default" href={item.github} target="_blank">
                    <FaGithubAlt />
                  </a>}
                  {item.website && <a className="btn link-default" href={item.website} target="_blank">
                    <MdOutlineWebAsset />
                  </a>}
                </div>
              </div>
              )
            })}
            {openMobile && mobProjects.map((item) => {
              return (
                <div className="card" key={item.id}>
                <div className="img-wrapper">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="content">{item.name}</div>
                <div className="btn-grps">
                  <div className="btn" onClick={() => showModal(item.id, "mob")}>
                    <AiFillEye />
                  </div>
                  {item.github && <a className="btn link-default" href={item.github} target="_blank">
                    <FaGithubAlt />
                  </a>}
                  {item.website && <a className="btn link-default" href={item.website} target="_blank">
                    <MdOutlineWebAsset />
                  </a>}
                </div>
              </div>
              )
            })}
        </div>
      </div>
    </div>
    )
}

export default Project
