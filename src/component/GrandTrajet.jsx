import { useEffect, useState } from "react";
import { getData } from "../api/Api";
import Leaflet from "./Leaflet";
import { useParams } from "react-router-dom";

const GrandTrajet = () =>
{
    const [lignes, setLignes] = useState([]);
    var data = "";
    const lesLignes = [];
    const {tag} = useParams();
    useEffect(() =>
    {
        async function callApi()
        {
            data = await getData(`getPos/${tag}`);
            console.log(data);
            data.map((pos) =>
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