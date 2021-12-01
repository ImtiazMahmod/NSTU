import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    
    return (
        <div className="notfound link">
            <div className="notFoundText">
            <div><h5 className='text-warning'>OPPS PAGE IS NOT AVAILABLE !</h5>
            <h1 className='text-secondary' style={{fontSize: '160px'}}>404</h1>
            <Link to="/home">
            Back to Home
            </Link></div>
           </div>
        </div>
    );
};

export default NotFound;