/* About.js */
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About({animals}) {
  
  return (
    <div className='about'>
        <Nav/>
        <div className='about-container'>
          <h1><span>유</span><span>기</span><span>동</span><span>물</span><span>을</span> <span>지</span><span>켜</span><span>줘</span></h1>
          {/* <form action="">
            <input type="text" value="search" placeholder="품종을 검색하세요"/>
            <button type='submit'>검색</button>
          </form> */}
          {
            animals.map((animal, key) => {
              return(
                  <div className='itemList' key={key}>
                      <img src={animal.popfile} alt={animal.kindCd} />
                      <div className="text">
                          <h2>유기동물정보</h2>
                          <p>공고번호 : {animal.noticeNo}</p>
                          <p>기본정보 : {animal.kindCd}, {animal.age}, {animal.sexCd}</p>
                          <p>특징 : {animal.specialMark}</p>
                          <p>유기 장소 및 발견 일자 : {animal.happenPlace}, {animal.happenDt}</p>
                          <p>공고기간 :{animal.noticeSdt} ~ {animal.noticeEdt}</p>
                          <p>상태 : {animal.processState}</p>
                          <p>보호소 : {animal.careNm} / {animal.careTel}</p>
                      </div>
                  </div>
              )
            })  
          }
        </div>
        <Footer/>   
    </div>
  )
}
