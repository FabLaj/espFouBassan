import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import { getData } from "../api/Api";


const DateList = () =>
{
    const [dates, setDates] = useState([]);
    const {tag} = useParams();
    useEffect(() =>  {
        async function callApi()
        {
            setDates(await getData("getAllDateByTag?tag=" + tag));
        }
        callApi();
    }, [tag]);

    return (
        <ListGroup className="" as="ul" variant="flush">
            {
                dates.map((date) =>
                {
                    date = date.split('T')[0];
                    return(
                        <ListGroup.Item id={date} key={date} className="m-1 text-primary bg-light" action variant="secondary" as={Link} to={date}>{date}</ListGroup.Item>
                    );
                })
            }
        </ListGroup>
    );
};

export default DateList;