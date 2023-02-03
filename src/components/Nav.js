/* nav GNB */
import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
  const img = ["/images/logo.svg", "/images/logo1.svg"];
  return (
    <div>
         <nav className='nav'>
          <div className='logoimg'>
            <img src={img[0]} alt='logo'/>
            <img src={img[1]} alt='logo1'/>
          </div>
            <div className='gnb'>
              <Link to='/'>Home</Link>
              <Link to='/about'>유기동물친구 소개</Link>
              <Link to='/projects'>입양하기 전에</Link>
            </div>
        </nav>
    </div>
  )
}
