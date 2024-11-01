import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [friends, setFriends] = useState(data);
  return (
    <main>
      <section className="container">
        <div className="">
          <h1 className="mt-6 bg-red-300">{friends.length} Birthdays Today</h1>
        </div>
        <List friends={friends} setFriends={setFriends} />

        <div>
          <button className="btn" type="button" onClick={() => setFriends([])}>
            clear all
          </button>
        </div>

        <div>
          <button
            className="btn"
            style={{ marginTop: "20px" }}
            type="button"
            onClick={() =>
              setFriends([
                ...friends,
                {
                  id: new Date().getTime(),
                  name: "Elisha Naik",
                  age: 23,
                  image:
                    "https://www.course-api.com/images/people/person-3.jpeg",
                },
              ])
            }
          >
            Add one
          </button>
        </div>
      </section>
    </main>
  );
};
export default App;
