import React from 'react';
import './assets/fonts/Starjout.ttf';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Spaceship from './Components/Spaceship/index';
import Pilot from './Components/Pilot/index';
import Film from './Components/Film/index';

import SpaceshipDetail from './Components/Spaceship/SpaceshipDetail';
import PilotDetail from './Components/Pilot/PilotDetail';
import FilmDetail from './Components/Film/FilmDetail';
function App() {
  return (
      <Routes>
          <Route exact path="/" element={<Spaceship />} />
          <Route path="/pilots" element={<Pilot />} />
          <Route path="/films" element={<Film />} />
          <Route path="/spaceships" element={<Spaceship />} />
          <Route path="/pilot-detail/:id" element={<PilotDetail/>} />
          <Route path="/spaceship-detail/:id" element={<SpaceshipDetail/>} />
          <Route path="/film-detail/:id" element={<FilmDetail/>}/>

      </Routes>
  );
}

export default App;


