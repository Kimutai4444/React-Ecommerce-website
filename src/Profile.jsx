import React, { useContext, useEffect } from "react";
import { theme } from "./App";
import "./Profile.css";
import profile from "./profile.jpeg";
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header";

function Profile() {
  const [appTheme, setAppTheme] = useContext(theme);
  const navigate = useNavigate();

  useEffect(() => {
    let islogedIn = localStorage.getItem("stored");
    if (!islogedIn) {
      navigate("/Login");
    }
  }, []);

  function logOut() {
    localStorage.removeItem("stored");
    navigate("/");
  }

  return (
    <>
      <Header />
      <div className="profile">
        {/* {appTheme} */}
        <div className="profile-content">
          <div className="profile-picture">
            <img src={profile} />
          </div>
          <div className="profile-details">
            <h2>Cosmas Kimutai</h2>
            <p>Email: cosmas@gmail.com</p>
            <p>Location: Sykimau Machakos</p>
            <p>Year: January 1, 2022</p>
            <button onClick={logOut}>Log out</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
