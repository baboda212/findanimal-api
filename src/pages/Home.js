/* Home.js */
import React from 'react';
import Nav from '../components/Nav';
import style from './style.module.css';


export default function Home() {
  return (
    <div class={style.wrap}>
        <Nav/>
        <div class={style.home_text}>
          <h1>당신의 소중한 결정이 이 동물친구들에게는 삶을 지속할 수 있는 힘이 됩니다.</h1>
          <a href='/about'>동물친구들 만나러 가기</a>
        </div>
        <div class={style.container}>
          <div class={style.bk}>
            <div class={style.mid}>
              <div class={style.fore}>
                <div class={style.figure}></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
