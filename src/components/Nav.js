/* nav GNB */
import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <div>
         <nav className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/about'>유기동물친구 소개</Link>
            <Link to='/projects'>입양하기 전에</Link>
        </nav>
    </div>
  )
}
