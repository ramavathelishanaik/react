import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import { useState, useRef, useEffect } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linkscontainerRef = useRef();
  const linksRef = useRef();

  useEffect(() => {
    let linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight, "height");

    // console.log(linkscontainerRef.current.getBoundingClientRect().height);
    if (toggle) {
      linkscontainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linkscontainerRef.current.style.height = "0px";
    }
  }, [toggle]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setToggle((pre) => !pre)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linkscontainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="">
          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
