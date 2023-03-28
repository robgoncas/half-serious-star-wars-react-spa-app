import React, { useState, useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import './Pilot.css';
import axios from 'axios'
import getData from '../../utils/getData';

function Pilot() {
  const initialPilotUrl = 'https://swapi.dev/api/people/'

  const retrievePilots = async () => await getData(initialPilotUrl);

  const navigate = useNavigate();

  const handleClickPilots = (url) => {
    navigate('/pilot-detail/'+ url.charAt(url.length - 2));
}

  const [pilotList, setPilotsList] = useState([])
  const sourceRef = useRef(axios.CancelToken.source())

  useEffect(() => {
    const source = sourceRef.current
    const getPilots = async () => {
      const res = await retrievePilots()

      setPilotsList(res.results)
    }
    getPilots()
  }, [])


  return (
    <div className='container'>

      <div className='row mt-4 mb-4 text-center'>
       <div className='col-12'> <h1>All Star Wars Pilots</h1></div>
      </div>

      <div className='row pl-2 pr-2'>
        {pilotList.map((pilot) => (

          <div className="card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3 " key={pilot.name}>
          <h2 className="card-title mt-3">{pilot.name}</h2>

            <img className="card-img-top mt-2"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F04%2F28%2FEW_StarWars_21-40.jpg" alt="Pilot" />
            <div className="card-body">
              
              <label>Height:</label>
              <p className="card-text">{pilot.height}</p>

              <label>Mass:</label>
              <p className="card-text">{pilot.mass}</p>

              <label>Genre:</label>
              <p className="card-text">{pilot.genre != null ? pilot.genre : 'No especified'}</p>

              <div className='containter text-center mb-4'>
                <div className='row'>
                <div className='col-6'>
                <label>Films:</label> {pilot.films.length}
                  </div>
                  <div className='col-6'>
                  <label>Species:</label> {pilot.species.length}
                  </div>
                  <div className='col-6'>
                  <label>Vehicles:</label> {pilot.vehicles.length}
                  </div>
                  <div className='col-6'>
                  <label>Spaceships:</label> {pilot.starships.length}
                  </div>
                </div>
              </div>



              <a onClick={ () => {handleClickPilots(pilot.url)}} className="btn btn-dark w-100 sw-btn">Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pilot;
