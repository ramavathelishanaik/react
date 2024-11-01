import Each from "./Each";
const List = ({ friends, setFriends }) => {
  const handleremove = (id) => {
    setFriends((friends) => friends.filter((each) => each.id !== id));

    // console.log("remove", id);
  };

  return (
    <div>
      {friends.map((friend) => {
        return <Each {...friend} handleremove={handleremove} key={friend.id} />;
      })}
    </div>
  );
};
export default List;
