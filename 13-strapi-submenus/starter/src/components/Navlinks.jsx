import sublinks from "../data";
import useGlobalContext from "../useGlobalContext";

const Navlinks = () => {
  const { openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const position = e.target.getBoundingClientRect();
    const center = (position.left + position.right) / 2;
    const bottom = position.bottom - 3;
    console.log(bottom, "bb");
    // console.log(center);
    // console.log(page, position);
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      closeSubmenu();
    }
  };

  return (
    <div className="nav-links" onMouseOver={handleSubmenu}>
      {sublinks.map((link) => {
        const { page, pageId } = link;
        return (
          <button
            key={pageId}
            className="nav-link "
            onMouseOver={displaySubmenu}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Navlinks;
