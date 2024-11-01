const url = "https://www.course-api.com/react-tabs-project";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  const [tabsData, setTabsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [active, setActive] = useState(0);

  const [singleTabData, setSingleTabData] = useState([]);

  const filterTabData = (id, index) => {
    setActive(index);
    setSingleTabData(() => {
      let singledata = tabsData.filter((each) => each.id === id);
      return singledata;
    });
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      setTabsData(data);
      setSingleTabData([data[active]]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section">
        <h4>Loading....</h4>
      </section>
    );
  }

  if (error) {
    return (
      <div>
        <h4>Something Went wrong... Please Try Again..</h4>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Experiance</h2>
        <div className="title-underline"></div>
      </div>
      <div className="jobs-center">
        <Sidebar
          sidebarData={tabsData}
          filterTabData={filterTabData}
          active={active}
        />
        <Main mainData={singleTabData} />
      </div>
    </section>
  );
};
export default App;
