import React from 'react';
import './App.css';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import LatestRelease from './Components/LatestRelease';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <div className='content'>
        <Welcome/>
        <LatestRelease/>
      </div>
      <MyFooter/>
    </div>
  );
}

export default App;
