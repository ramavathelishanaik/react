import { FaAngleDoubleRight } from "react-icons/fa";
const Main = ({ mainData }) => {
  return (
    <article className="job-info">
      {mainData.map((each) => {
        const { id, title, duties, dates, company } = each;
        return (
          <div key={id}>
            <h3 className="">{title}</h3>
            <h4 className="job-company">{company}</h4>
            <p className="job-date">{dates}</p>

            {duties.map((each, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{each}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </article>
  );
};
export default Main;
