import React, { useState, useEffect } from "react";
import "./Home.scss";
import axios from "axios";
import Login from "../Login/Login";
import Cards from "../Cards/Cards";
import Loading from "../Loading/Loading";
// import Cards1 from "../Cards1/Cards1";

const Home = () => {
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsulYD2akz.json"
      )
      .then((res) => {
        !search
          ? setData(res.data)
          : setData(res.data.filter((songs) => songs.singer === search));
      });
  }, [search]);
  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
  };
  return (
    <div className="home">
      <nav className="navbar navbar-light bg-dark">
        <div className="container">
          <h1 className="home-navbar-brand">LOOP</h1>
          <form
            className="navbar-form"
            onSubmit={onSubmit}
            style={{ display: "flex" }}
          >
            <input
              className="form-control me-2"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              aria-label="Search"
            />
            <input className="btn btn-success" type="submit" value="Search" />
          </form>
          <button
            className="btn btn-primary"
            style={{ width: "6rem" }}
            onClick={() => setPopup(true)}
          >
            LogIn
          </button>
        </div>
      </nav>

      {data.length >= 1 ? (
        <center>
          <Cards songs={data} />
        </center>
      ) : (
        <Loading />
      )}
      <Login trigger={popup} setTrigger={setPopup} />
    </div>
  );
};

export default Home;
