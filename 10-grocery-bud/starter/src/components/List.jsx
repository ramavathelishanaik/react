import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, handleRemove, handleEdit }) => {
  return (
    <div className="single-item">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div key={id}>
            <p>{title}</p>
            <div className="single-item">
              <button className=" edit-btn" onClick={() => handleEdit(id)}>
                <FaEdit />
              </button>
              <button
                className="btn remove-btn"
                onClick={() => handleRemove(id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default List;
