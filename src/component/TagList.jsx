import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { getData } from '../api/Api';

const url = "https://localhost:7102/getAllTag";

const TagList = () => {
    const [tags, setTags] = useState(["En attente"]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() =>  {
        async function callApi()
        {
            setIsLoading(true);
            setTags(await getData("getAllTag"));
            setIsLoading(false);
        }
        callApi();
    }, [])

    return (
        <>{
            isLoading ? 
            <p>En attente de l'API</p>
            : 
            <Dropdown as={NavItem} drop='down-centered'>
                <Dropdown.Toggle as={NavLink}>Les fous de Bassan</Dropdown.Toggle>
                <Dropdown.Menu>
                    {tags.map((tag) =>
                    {
                        return(
                            <Dropdown.Item key={tag} as={Link} to={tag}>{tag}</Dropdown.Item>
                        );
                    })}
                </Dropdown.Menu>
            </Dropdown>
            }
        </>
    );
};

export default TagList;