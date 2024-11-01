import { FaTimes } from "react-icons/fa";
import logo from "../logo.svg";
import { social, links } from "../data";
import useGlobalContext from "../useGlobalContext.js";
const Sidebar = () => {
  const { sidebar, setSidebar } = useGlobalContext();
  return (
    <aside
      className={` ${sidebar ? "show-sidebar sidebar" : "sidebar"}`}
      // onMouseLeave={() => setSidebar((sidebar) => !sidebar)}
    >
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button
          className="close-btn"
          onClick={() => setSidebar((sidebar) => !sidebar)}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, text, icon } = link;
          return (
            <li key={id}>
              <a href="#">
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((each) => {
          const { id, url, icon } = each;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
