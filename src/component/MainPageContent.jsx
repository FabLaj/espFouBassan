import { useParams } from "react-router-dom";
import Leaflet from "./Leaflet";
import Api, { getData } from "../api/Api";
import { useEffect, useState } from "react";
import Graph from "./Graphique";

const url = "https://localhost:7102/";

const lesProf = [];
const MainPage = () =>
{
  const pos = [];
  const [lesLignes, setLesLignes] = useState([]);
  const lignes = [];
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  var {tag, date} = useParams();
  console.log(date);
  useEffect(() =>  {

    // async function callApi()
    // {
    //   var response = await getData(`${tag}?date=${date}`);
    //   console.log(response);
    //   setData(response);
    // }

    const fetchData = async () =>
    {
      console.log(`URL envoyé: ${tag}?date=${date}`);
      const data = await getData(`${tag}?date=${date}`);
      console.log(data);
      data.positionTemps.map((pos) => {
        lesLignes.push([pos.latitude, pos.longitude]);
    });
    }

    fetchData();

      // data.profondeurTemps.map((prof) =>
      // {
      //   lesProf.push([new Date(prof.date),prof.profondeur]);
      // })

      // callApi();
      // console.log("les data");
      // console.log(data);
      // data.positionTemps.map((pos) => 
      // {
      //   lignes.push([pos.latitude, pos.longitude]);
      // })
  }, []);

    return(
      <>
      <p>{lesLignes}</p>
        <h2 className="text-dark">Tableau de bord du {date} pour le tag {tag}</h2>
        <h4></h4>
          <Leaflet lesLignes={lesLignes}/>
        <br/>
        <form>
          <div className="row">
            <div className="col-auto form-outline" id="timepicker-value">
              <input type="text" className="form-control" data-mdb-timepicker-format24="true" />
                <label className="form-label" htmlFor="form3">Select a time</label>
            </div>
            <div className="col">
              <label htmlFor="slider" className="form-label">Moment</label>
              <input type="range" className="form-range" id="slider" />
            </div>
            <div className="col-auto form-outline" id="timepicker-value">
                <input type="text" className="form-control" data-mdb-timepicker-format24="true"/>
                <label className="form-label" htmlFor="form3">Select a time</label>
            </div>
          </div>
        </form>
        <br/>
        <Graph lesProfondeurs={lesProf}/>
        </>
    );
}

export default MainPage;