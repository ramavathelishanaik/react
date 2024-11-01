import SingleMenuItem from "./SingleMenuItem";
const Menu = ({ allmenuitems }) => {
  return (
    <div className="section-center">
      {allmenuitems.map((item) => {
        return <SingleMenuItem {...item} key={item.id} />;
      })}
    </div>
  );
};
export default Menu;
