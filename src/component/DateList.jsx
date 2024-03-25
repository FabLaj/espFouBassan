import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import { getData } from "../api/Api";


const DateList = () =>
{
    const [dates, setDates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {tag} = useParams();
    useEffect(() =>  {
        async function callApi()
        {
            setIsLoading(true);
            setDates(await getData("getAllDateByTag?tag=" + tag));
            setIsLoading(false);
        }
        console.log(tag);
        callApi();
    }, [tag]);

    return (
        
        <ListGroup className="" as="ul" variant="flush">
            {
                isLoading ?
                <p>En attente de l'API</p>
                :
                dates.map((date) =>
                {
                    date = date.split('T')[0];
                    return(
                        <ListGroup.Item id={date} key={date} className="m-1 text-primary bg-light" action variant="secondary" as={Link} to={date}>{date}</ListGroup.Item>
                    );
                })
            }
            <ListGroup.Item id="all" key="all" className="m-1 text-primary bg-light" action variant="secondary" as={Link} to="all">Voir le trajet total</ListGroup.Item>
        </ListGroup>
    );
};

export default DateList;