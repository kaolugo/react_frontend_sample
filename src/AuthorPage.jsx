import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios';
import './AuthorPage.css';
import { USERPOSTS, USERS } from './APIEndpoint.js';


function Post(props) {
    const item = props.info;

    return (
        <div class='singlePost'>
            <li class='postTitle'>{item.title}</li>
            <div class='postBody'>{item.body}</div>
        </div>
    );
}

function AuthorPage() {
    const location = useLocation();
    // userid of this author
    const { from } = location.state;

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUser = async() => {
            try {
                const response = await axios.get(USERS + '/' + from);
                setUser(response.data);
                setError(null);
            } catch(err) {
                setError(err.message);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        const getPosts = async() => {
            try {
                const response = await axios.get(USERPOSTS + from);
                setPosts(response.data);
                setError(null);
            } catch(err) {
                setError(err.message);
                setPosts(null);
            } finally {
                setLoading(false);
            }
        };

        getUser();
        getPosts();

    }, [from]);

    if (error) {
        console.log(error);
    }

    return (
        <div>
            {loading && <div>Loading ...</div>}
            {!loading && (
                <div className = "AuthorPage" class='authorPage'>
                    <div class = 'titleArea'>
                        <h1>THE AUTHOR</h1>
                        <h4>THE AUTHOR</h4>
                        <h5><Link to='/'>go back to main page 👈</Link></h5>
                    </div>
                    <div class='authorDash'>
                        <div class='authorProfile'>
                            {user && <div class='fullname'>{user.name}</div>}
                            {user && <div class='profileusername'>@{user.username}</div>}
                            {user && <div class='userSite'>🔗 <a href={'https://' + user.website}>{user.website}</a></div>}
                            {user && <div class='blurb'>"{user.company.catchPhrase}"</div>}
                        </div>
                        <div class='authorPosts'>
                            {user && <div class='feedheader'>{user.name}'s blog posts ...</div>}
        
                            {posts && posts.map((item) => (
                                <Post info={item} />
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </div>
        
    );
}

export default AuthorPage;