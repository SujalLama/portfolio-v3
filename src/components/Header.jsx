import { MdAssistantNavigation } from "react-icons/md";
// import { AiTwotoneBulb } from "react-icons/ai";
import { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);
  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
    setNav(false);
  };

  return (
    <div className="header">
      <div className="nav">
        <div
          className={`nav-icon ${nav && "active"}`}
          onClick={() => setNav(!nav)}
        >
          <MdAssistantNavigation />
        </div>
        <ul>
          <li onClick={() => scrollToSection("landing")}>Home</li>
          <li onClick={() => scrollToSection("project")}>Projects</li>
          <li onClick={() => scrollToSection("about")}>About</li>
        </ul>
      </div>
      {/* <div className="bulb">
        <AiTwotoneBulb />
      </div> */}
    </div>
  );
}

export default Header;
