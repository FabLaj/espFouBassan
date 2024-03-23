import { useEffect, useState } from "react";
import { getData } from "../api/Api";
import Leaflet from "./Leaflet";

const GrandTrajet = () =>
{
    const [lignes, setLignes] = useState([]);
    var data = "";
    const lesLignes = [];
    useEffect(() =>
    {
        async function callApi()
        {
            data = await getData();
            data.positionTemps.map((pos) =>
            {
              lesLignes.push([pos.latitude, pos.longitude]);
            })
            setLignes(lesLignes);
        }
        callApi();
    }, []);
    return(
        <>
            <Leaflet lesLignes={lignes}/>
        </>
    );
}

export default GrandTrajet;