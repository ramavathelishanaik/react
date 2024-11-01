import useGlobalContext from "../useGlobalContext";
import { useEffect, useRef, useState } from "react";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const submenuRef = useRef(null);
  const [column, setColumn] = useState("col-2");

  useEffect(() => {
    setColumn("col-2");
    const submenustyle = submenuRef.current;
    const { center, bottom } = location;
    // console.log(bottom, "bottom");
    submenustyle.style.left = `${center}px`;
    submenustyle.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumn("col-2");
    } else if (links.length > 3) {
      setColumn("col-4");
    } else {
      setColumn("col-2");
    }
  }, [location, links]);
  return (
    <aside
      className={`${isSubmenuOpen ? "show-submenu submenu" : "submenu"}`}
      ref={submenuRef}
    >
      {page}
      <div className={`submenu-center ${column}`}>
        {links.map((link) => {
          const { id, label, icon, url } = link;
          return (
            <a href={url} key={id} className="flex ">
              <p>{label}</p>
              <p>{icon}</p>
            </a>
          );
        })}
      </div>
    </aside>
  );
};
export default Submenu;
