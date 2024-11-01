const Sidebar = ({ sidebarData, filterTabData, active }) => {
  return (
    <div className="btn-container">
      {sidebarData.map((each, index) => {
        return (
          <button
            key={each.id}
            className={`${active === index ? "job-btn active-btn" : "btn"}`}
            onClick={() => filterTabData(each.id, index)}
          >
            {each.company}
          </button>
        );
      })}
    </div>
  );
};
export default Sidebar;
