import React from 'react'
import {FaSpotify,FaSearch,FaHome,FaBookOpen} from 'react-icons/fa'
import { IconContext } from "react-icons";

export default function SideBar() {
  return (
    <nav id="sidebar">
          <div className="sidebar-header">
            <IconContext.Provider value ={{className:'spotifyIcon'}}>
              <FaSpotify/>
            </IconContext.Provider>
            <p>Spotify</p>
          </div>
          <ul className="list-unstyled" >
            <div id="sidebar-content">
              <div className="d-flex active">
                <IconContext.Provider value ={{className:'sidebarIcons'}}>
                  <FaHome/>
                </IconContext.Provider>
                <a href="/">Home</a>
              </div>
              <div className="d-flex">
                  <IconContext.Provider value ={{className:'sidebarIcons'}}>
                    <FaSearch/>
                  </IconContext.Provider>
                  <a href="">Search</a>
              </div>
              <div className="d-flex">
                  <IconContext.Provider value ={{className:'sidebarIcons'}}>
                    <FaBookOpen/>
                  </IconContext.Provider>
                  <a href="album.html">Your Library</a>
              </div>
            </div>
          </ul>
          <div id="buttons">
            <div id="signUp">
              <button type="button" className="btn btn-block"><p>SIGN UP</p></button>
            </div>
            <div id="login">
              <button type="button" className="btn btn-block"><p>LOGIN</p></button>
            </div>
            <div id="sidebar-footer">
              <div className="footer">
                <p>Cookie</p>
                <p>|</p>
                <p>Privacy</p>
              </div>
              <div style={{marginTop: "-15px", marginLeft: "5px"}}>
                <p style={{fontSize:"12px"}}>Policy</p>
              </div>
            </div>
          </div>
    </nav>
  )
}
