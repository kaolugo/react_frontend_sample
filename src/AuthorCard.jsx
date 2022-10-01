// import './AuthorCard.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { USERPOSTS } from './APIEndpoint';

function AuthorCard(props) {
    const info = props.info;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(USERPOSTS + info.id);
                setData(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [info]);

    console.log(data);

    return (
        <div class='card'>
            <div class='fullname'>{info.name}</div>
            <div class='username'>@{info.username}</div>
            {data && <li class='postTitle'>  {data[0].title}</li>}
            {data && <div class='postBody'>  {data[0].body}</div> }
            {data && <li class='postTitle'>  {data[1].title}</li>}
            {data && <div class='postBody'>  {data[1].body}</div> }
        </div>
    );
}

export default AuthorCard;
