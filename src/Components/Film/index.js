import React, { useState, useEffect, useRef } from 'react';
import './Film.css';
import axios from 'axios'
import getData from '../../utils/getData';
import { useNavigate } from 'react-router-dom';


function Films() {
  const initialFilmUrl = 'https://swapi.dev/api/films/'

  const retrievePilots = async () => await getData(initialFilmUrl);

  const navigate = useNavigate();

  const handleClickFilms = (url) => {
    navigate('/film-detail/'+ url.charAt(url.length - 2));
}

  const [filmList, setFilmsList] = useState([])
  const sourceRef = useRef(axios.CancelToken.source())

  useEffect(() => {
    const source = sourceRef.current
    const getFilms = async () => {
      const res = await retrievePilots()

      setFilmsList(res.results)
    }
    getFilms()
  }, [])


  return (
    <div className='container'>

      <div className='row mt-4 mb-4 text-center'>
        <h1>All Star Wars Films</h1>
      </div>

      <div className='row'>
        {filmList.map((film) => (
          <div className="card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3" key={film.name}>
          <h2 className="card-title mt-2">{film.title}</h2>
            <img className="card-img-top mt-2"
              src="https://assets-prd.ignimgs.com/2022/05/25/starwarssaga-blogroll-1653502553714.jpg" alt="Pilot" />
            <div className="card-body">

              <label>ID Episode:</label>
              <p className="card-text">{film.episode_id}</p>

              <label>Opening Crawl:</label>
              <p className="card-text">{film.opening_crawl}</p>

              <label>Release Date:</label>
              <p className="card-text">{film.release_date}</p>

              <div className='containter text-center mb-4'>
                <div className='row'>
                <div className='col-6'>
                <label>Characters:</label> {film.characters.length}
                  </div>
                  <div className='col-6'>
                  <label>Planets:</label> {film.planets.length}
                  </div>
                  <div className='col-6'>
                  <label>Vehicles:</label> {film.vehicles.length}
                  </div>
                  <div className='col-6'>
                  <label>Species:</label> {film.species.length}
                  </div>
                </div>
              </div>



              <a onClick={ () => {handleClickFilms(film.url)}} className="btn btn-dark w-100 sw-btn">Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Films;
