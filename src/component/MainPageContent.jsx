import { useParams } from "react-router-dom";
import Leaflet from "./Leaflet";
import Api, { getData } from "../api/Api";
import { useEffect, useState } from "react";
import Graph from "./Graphique";

const url = "https://localhost:7102/";

const lesProf = [];
const MainPage = () =>
{
  const lesLignes = [];
  const depths = [];
  const [lignes, setLignes] = useState([]);
  const [depth, setDepth] = useState([]);
  const [reload, setReload] = useState();
  // const [loading, setLoading] = useState(true);
  var {tag, date} = useParams();
  var data = "";
  useEffect(() =>  {


    async function callApi()
    {
      data = await getData(`${tag}?date=${date}`);
      data.positionTemps.map((pos) =>
      {
        lesLignes.push([pos.latitude, pos.longitude]);
      })
      setLignes(lesLignes);
      // console.log(data.profondeurTemps[0].profondeur);
      console.log(data);
      data.profondeurTemps.map((depth) =>
      {
        depths.push([depth.date, depth.profondeur]);
      })
      
      setDepth(depths);
    }
   
    callApi();
  }, [date]);

    return(
      <>
      <p>{lesLignes}</p>
        <h2 className="text-dark">Tableau de bord du {date} pour le tag {tag}</h2>
        <h4></h4>
          <Leaflet lesLignes={lignes}/>
        <br/>
        <br/>
        {
          depth.length == 0 ? <h3>Aucune données de profondeur trouvé</h3>
          :
          <Graph lesProfondeurs={depth}/>
        }
        </>
    );
}

export default MainPage;