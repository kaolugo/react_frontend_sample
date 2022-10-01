import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import './AuthorPage.css';
import { USERPOSTS } from './APIEndpoint.js';


function AuthorPage() {
    const location = useLocation();
    const { from } = location.state;

    return (
        <div>hello</div>
    )
}

export default AuthorPage;