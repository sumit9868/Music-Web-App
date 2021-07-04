import React, { useEffect, useState } from 'react';
import '../CSS/App.css';
import Login from './Login.js';
import { getTokenFromUrl } from "../API/spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null)

  useEffect(() => {
    //Run code based on a given condition {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("This is a user", user);
      });
    }
    console.log("We got a token", _token);
  }, []);

  return (
    <div className="App">

      {
        token ? (

          <h1>stfu chamAN SUMIT</h1>
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
