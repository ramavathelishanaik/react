import { useEffect, useState } from "react";
import List from "./components/List";
import Alert from "./components/Alert";
import empty_cart from "./assets/empty_cart.svg";

const getlocalStorage = () => {
  let listpresent = localStorage.getItem("list");

  if (listpresent) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getlocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      ShowAlert(true, "danger", "please enter any value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          const { id } = item;
          if (id === editID) {
            return {
              ...item,
              title: name,
            };
          }
          return item;
        })
      );
      setIsEditing(false);
      setName("");
      setEditId(null);
      ShowAlert(true, "success", "item is edited");
    } else {
      ShowAlert(true, "success", "item is adde to the list");
      const newData = { id: new Date().getTime().toString(), title: name };
      setList([...list, newData]);
      setName("");
    }
  };

  const ShowAlert = (show = false, type = "", msg = "") => {
    setAlert({ ...alert, show: show, type: type, msg: msg });
  };

  const CleatList = () => {
    ShowAlert(true, "danger", "all list items are cleared");
    setList([]);
  };

  const handleRemove = (id) => {
    const filteredlist = list.filter((each) => each.id !== id);
    setList(filteredlist);
    ShowAlert(true, "danger", "items are removed");
  };

  const handleEdit = (id) => {
    console.log(id);
    const specificItem = list.find((each) => each.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={(e) => handleSubmit(e)}>
        {alert.show && <Alert {...alert} removeAlert={ShowAlert} list={list} />}
        <h4>grocery bud</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            placeholder="eg: eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 ? (
        <div className="grocery-container items">
          <List
            items={list}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
          />
          <button className="btn" onClick={CleatList}>
            clear items
          </button>
        </div>
      ) : (
        <div>
          <img
            src={empty_cart}
            alt="empty_cart"
            style={{ height: "100px", width: "100px" }}
          />
        </div>
      )}
    </section>
  );
};

export default App;
