import React, { useState, useEffect, useRef } from "react";
import { useParams,  useNavigate } from 'react-router-dom';
import "./Pilot.css";
import axios from "axios";
import getData from "../../utils/getData";

const PilotDetail = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const baseUrl = "https://swapi.dev/api/people/" + id;

  const retrievePilot = async () => await getData(baseUrl);

  const [pilot, setPilot] = useState([]);
  const sourceRef = useRef(axios.CancelToken.source());

  useEffect(() => {
    const source = sourceRef.current;
    const getPilot = async () => {
      const res = await retrievePilot();
      setPilot(res);
    };
    getPilot();
  }, []);

  return (
    <div className="container">
      <div className="row mt-4 mb-4 text-center">
        <h1> {pilot.name} </h1>
      </div>
      <div className="card col-12 mt-3 mb-3" key={pilot.name}>
        <div className="card-body">
          <div className="row">
            <div className="col-12 text-center">
              <img
                className="card-img-top mt-2"
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F04%2F28%2FEW_StarWars_21-40.jpg"
                alt="Card image cap"
                style={{width:350}}
              />
            </div>

          </div>
          <div className="row mt-4">
            <div className="col-6">
              <label>Height :</label>
              <p className="card-text"> {pilot.height}</p>
            </div>
            <div className="col-6">
              <label>Hair Color :</label>
              <p className="card-text"> {pilot.hair_color}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6">
              <label>Eye Color :</label>
              <p className="card-text"> {pilot.eye_color}</p>
            </div>
            <div className="col-6">
              <label>Birth Year :</label>
              <p className="card-text"> {pilot.birth_year}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6">
              <label>Gender :</label>
              <p className="card-text"> {pilot.gender}</p>
            </div>
            <div className="col-6">
              <label>Homeworld :</label>
              <p className="card-text"> {pilot.homeworld}</p>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <label>Skin Color :</label>
              <p className="card-text"> {pilot.skin_color}</p>
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

export default PilotDetail;
