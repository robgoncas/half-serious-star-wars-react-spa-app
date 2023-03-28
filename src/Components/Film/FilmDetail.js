import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import "./Film.css";
import axios from "axios";
import getData from "../../utils/getData";

const FilmDetail = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const baseUrl = "https://swapi.dev/api/films/" + id;

  const retrieveFilm = async () => await getData(baseUrl);

  const [film, setFilm] = useState([]);
  const sourceRef = useRef(axios.CancelToken.source());

  useEffect(() => {
    const source = sourceRef.current;
    const getFilm = async () => {
      const res = await retrieveFilm();
      setFilm(res);
    };
    getFilm();
  }, []);

  return (
    <div className="container">
      <div className="row mt-4 mb-4 text-center">
        <h1> Episode {id} - {film.title} </h1>
      </div>
      <div className="card col-12 mt-3 mb-3" key={film.title}>
        <div className="card-body">
          <div className="row">
            <div className="col-12 text-center">
              <img
                className="card-img-top mt-2"
                src="https://assets-prd.ignimgs.com/2022/05/25/starwarssaga-blogroll-1653502553714.jpg"
                alt="Card image cap"
                style={{width:450}}
              />
            </div>

          </div>
          <div className="row mt-4">
            <div className="col-6">
              <label>Director :</label>
              <p className="card-text"> {film.director}</p>
            </div>
            <div className="col-6">
              <label>Producer :</label>
              <p className="card-text"> {film.producer}</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <label>Release date :</label>
              <p className="card-text"> {film.release_date}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label className="text-center">Opening Crawl:</label>
              <p className="card-text text-center"> {film.opening_crawl}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <a onClick= {() => navigate(-1)} className="btn btn-dark w-100 sw-btn">
                Go back
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
