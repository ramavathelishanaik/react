const Each = ({ name, image, age, id, handleremove }) => {
  return (
    <div>
      <div className="person">
        <div>
          <img src={image} alt={name} className="img" />
        </div>
        <div>
          <h2>{name}</h2>
          <h6>{age}</h6>
        </div>
        <button
          type="button"
          className="btn mt-4"
          onClick={() => handleremove(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default Each;
