import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const EachQuestion = ({
  id,
  title,
  index,
  info,
  handleQuestion,
  opened,
  setOpened,
}) => {
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => handleQuestion(id - 1)}>
          {opened[index] ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </button>
      </header>
      {opened[index] ? <p>{info}</p> : null}
    </article>
  );
};
export default EachQuestion;
