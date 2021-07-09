import React, { useEffect } from 'react';
import '../CSS/App.css';
import Login from './Login.js';
import Player from './Player';
import { getTokenFromUrl } from "../API/spotify";
import { useDataLayerValue } from '../JS/DataLayer';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
// eslint-disable-next-line
  const [ { user , token} ,dispatch] = useDataLayerValue();

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
        console.log(user) ;
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })
    }
  },);
  return (
    <div className="app">

      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
