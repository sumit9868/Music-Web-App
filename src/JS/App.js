import React, { useEffect } from 'react';
import '../CSS/App.css';
import Login from './Login.js';
import Player from './Player';
import { getTokenFromUrl } from "../API/spotify";
import { useDataLayerValue } from '../JS/DataLayer';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {

  const [ {user , token} ,dispatch] = useDataLayerValue();

  useEffect(() => {
    //Run code based on a given condition {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {

        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });

    }
  }, []);
  return (
    <div className="App">

      {
        token ? (
          <Player/>
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
