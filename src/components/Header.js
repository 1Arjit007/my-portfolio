import React from 'react';
import {Link} from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
    return (
        <div>
            <Link to='/my-portfolio' className='btn btn-outline-success'>Home</Link>
            <Link to='/project' className='btn btn-outline-success' style={{margin:10}}>Project</Link>
            <Link to='/jokes' className='btn btn-outline-success' style={{margin:10}}>Jokes</Link>
        </div>
    )
}
export default Header;