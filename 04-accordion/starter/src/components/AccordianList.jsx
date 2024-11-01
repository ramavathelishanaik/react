import EachQuestion from "./EachQuestion";

import { useState } from "react";
const AccordianList = ({ data }) => {
  const [opened, setOpened] = useState(
    new Array(data ? data.length : 10).fill(false)
  );

  const handleQuestion = (id) => {
    if (opened.includes(true)) {
      const prevOpenedIndex = opened.indexOf(true);

      if (id === prevOpenedIndex) {
        const updateAllFalse = opened.map((item, index) =>
          index === id ? false : item
        );
        setOpened(updateAllFalse);
      } else {
        const updatedNewState = opened.map((item, index) =>
          index === id ? true : false
        );
        setOpened(updatedNewState);
      }
    } else {
      const updatedFirstTrueState = opened.map((item, index) =>
        index === id ? !item : item
      );
      setOpened(updatedFirstTrueState);
    }
  };

  return (
    <>
      {data.map((eachQuestion, index) => {
        const { title, info, id } = eachQuestion;
        return (
          <EachQuestion
            key={id}
            id={id}
            index={index}
            title={title}
            info={info}
            opened={opened}
            handleQuestion={handleQuestion}
            setOpened={setOpened}
          />
        );
      })}
    </>
  );
};
export default AccordianList;
