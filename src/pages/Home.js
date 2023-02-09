/* Home.js */
import React from 'react';
import Nav from '../components/Nav';
import style from './Home.module.css';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={style.wrap}>
        <Nav/>
        <div className={style.home_container}>
          <div className={style.home_text}>
            <h1>당신의 소중한 결정이 이 동물친구들에게는 삶을 지속할 수 있는 힘이 됩니다.</h1>
            <a href='/about'>동물친구들 만나러 가기 Click!</a>
          </div>
          <div className={style.container}>
            <div className={style.bk}>
              <div className={style.mid}>
                <div className={style.fore}>
                  <div className={style.figure}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
