import React from 'react';
import { Link } from 'react-router-dom';

function Home()
{
    return (
        <div className="home">
            <Link to='/order' className='btn'>PURCHASE ORDER</Link>
            <Link to='/request' className='btn'>PURCHASE REQUEST</Link>
        </div>
    );
}

export default Home;