import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((jsonData) => {
        setUser(jsonData);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <>
      <h1>Customer Data</h1>
      <h2>Name: {user.results[0].name.first}</h2>
      <img alt="" src={user.results[0].picture.large} />
    </>
  ) : (
    <>
      <h1>Data Pending...</h1>
    </>
  );
}

export default App;
