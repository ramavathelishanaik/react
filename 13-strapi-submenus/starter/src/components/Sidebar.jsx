import useGlobalContext from "../useGlobalContext";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <div className="sidebar-links">
        {sublinks.map((mainlinks, index) => {
          const { page, pageId, links } = mainlinks;
          return (
            <article key={pageId}>
              <h3>{page}</h3>
              <div className="sidebar-sublinks">
                {links.map((sublink) => {
                  const { id, icon, label, url } = sublink;
                  return (
                    <a key={id} href={url}>
                      {label}
                      {icon}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
};
export default Sidebar;
