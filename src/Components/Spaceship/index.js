import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Spaceships.css';
import axios from 'axios'
import {Button} from 'react-bootstrap';
import getData from '../../utils/getData';

function Spaceship() {
  const initialStarshipsUrl = 'https://swapi.dev/api/starships/'

  const spaceshipImgArray = [
    {name:"CR90 corvette", url:""},
    {name:"Star Destroyer", url:""},
    {name:"Sentinel-class landing craft", url:""},
    {name:"Death Star", url:""},
    {name:"Millennium Falcon", url:""},
    {name:"Y-wing", url:""},
    {name:"X-wing", url:""},
    {name:"TIE Advanced x1", url:""},
    {name:"Executor", url:""},
    {name:"Rebel transport", url:""},
  ]

  const retrieveStarships = async () => await getData(initialStarshipsUrl);

  const [starshipList, setStarshipsList] = useState([])
  const sourceRef = useRef(axios.CancelToken.source())
  const navigate = useNavigate();


  const handleClickFilms = (id) => {
    navigate('/film-detail/'+id);
}

  const handleClickPilots = (id) => {
    navigate('/pilot-detail/'+id);

  }

  const handleClickDetails = (url) => {

    navigate('/spaceship-detail/'+ url.substr(-2));

  }

  useEffect(() => {
    const source = sourceRef.current


    const getStarships = async () => {
      const res = await retrieveStarships()

      setStarshipsList(res.results)
    }
    getStarships()
  }, [])


  return (
    <div className='container'>

      <div className='row mt-4 mb-4 text-center'>
        <h1>All Star Wars Spaceships</h1>
      </div>
      <div className='row'>
        {starshipList.map((spaceship) => (
          <div className="card col-12 mt-3 mb-3" key={spaceship.name}>
            <div className='container'>
            <div className='row mt-4'>
                        <div className='col-12 text-left'>
                          <h2 className="card-title">{spaceship.name}</h2>
                        </div>
                      </div>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <img className="card-img-top mt-3 mb-3"
                    src="https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90h6z4d2369709tqyd7pb833l/public" alt="Spaceship trip" />
                </div>
                <div className='col-12 col-md-9'>
                  <div className="card-body">
                    <div className='container'>

                     

                      <div className='row mb-3'>
                        <div className='col-12 col-md-6 col-lg-4'>
                          <label>Starship Class:</label>
                          <p className="card-text">{spaceship.starship_class}</p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4'>
                          <label>Manufacturer:</label>
                          <p className="card-text">{spaceship.manufacturer}</p>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4'>

                          <label>Passengers:</label>
                          <p className="card-text">{spaceship.passengers}</p>
                        </div>
                      </div>
                      <div className='row mb-3'>
                        <div className='col-12 col-md-6 col-lg-4'>
                          <label>Cargo Capacity:</label>
                          <p className="card-text">{spaceship.cargo_capacity}</p>

                        </div>
                        <div className='col-12 col-md-6 col-lg-4'>
                          <label>Cost in credits:</label>
                          <p className="card-text">${spaceship.cost_in_credits}</p>

                        </div>
                        </div>

                        <div className='row'>
                          <div className='col-12 col-md-6'>
                            <label>Films:</label>
                            <ul>
                              {
                                spaceship.films.map((film, index) => {
                                  let id = film.charAt(film.length - 2);
                                  return (
                                    <li key={index} className='list-group-item'> <Button type='submit' className='film-button w-100 btn-dark sw-btn' 
                                    onClick={ () => {handleClickFilms(id)}}>Episode {id}</Button></li>
                                  )
                                })
                              }
                            </ul>
                          </div>
                          <div className='col-12 col-md-6'>
                            <label>Pilots:</label>
                            <ul>
                            
                              {
                                spaceship.pilots.length > 0 ? 
                                spaceship.pilots.map((pilot,index) => {
                                  let id = pilot.charAt(pilot.length - 2);
                                  return (
                                    <li key={index} className='list-group-item'> <Button type='submit' className='film-button w-100 btn-dark sw-btn' 
                                    onClick={ () => {handleClickPilots(id)}} >Pilot {id}</Button></li>
                                  )
                                }) : "No specified"
                              }
                            </ul>
                          </div>
                        </div>
                        <div className='col-12'>
                          <a onClick={() => {handleClickDetails(spaceship.url)}} className="btn btn-dark w-100 sw-btn">Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Spaceship;
