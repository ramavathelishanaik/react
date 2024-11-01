const Category = ({ allcategories, filterCategory }) => {
  return (
    <div className="btn-container">
      {allcategories.map((menu) => {
        return (
          <div key={menu}>
            <button
              className="filter-btn btn"
              onClick={(e) => filterCategory(menu)}
            >
              {menu}
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Category;
