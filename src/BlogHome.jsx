import { useState, useEffect } from 'react';
import './BlogHome.css';

function BlogHome() {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {

    // })

    return (
        <div className = "BlogHome" class = "blogHome">
            <div class = 'titleArea'>
                <h1>THE ANYTHING BLOG</h1>
                <h4>THE ANYTHING BLOG</h4>
                <h2>the blog where anything and <br></br>everything goes.</h2>
                <h3>meet some of our authors below 👇</h3>
            </div>
            <div class = 'authorCards'>

            </div>
        </div>
    );
}

export default BlogHome;