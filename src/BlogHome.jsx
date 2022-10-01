import { useState, useEffect } from 'react';
import axios from 'axios';
import './BlogHome.css';
import { USERS } from './APIEndpoint.js';
import AuthorCard from './AuthorCard';


function BlogHome() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(USERS);
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
        // axios.get(USERS)
        //     .then((response) => {
        //         //console.log(response);
        //         setData(response.data)
        //     })
    }, []);

    console.log(data)


    return (
        <div className = "BlogHome" class = "blogHome">
            <div class = 'titleArea'>
                <h1>THE ANYTHING BLOG</h1>
                <h4>THE ANYTHING BLOG</h4>
                <h2>the blog where anything and <br></br>everything goes.</h2>
                <h3>meet some of our authors below 👇</h3>
            </div>
            <div class = 'authorCards'>
                {data && <AuthorCard info={data[0]} />}
                {data && <AuthorCard info={data[1]} />}
                {data && <AuthorCard info={data[2]} />}
            </div>
        </div>
    );
}

export default BlogHome;