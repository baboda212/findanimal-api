/* Home.js */
import React from 'react';
import Nav from '../components/Nav';
import style from './style.module.css';


export default function Home() {
  return (
    <div>
        <Nav/>
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
