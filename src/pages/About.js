/* About.js */
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About({animals, pageNo, maxPages, prevPage, nextPage, totalCount, inputRef, setSearch, setPageNo}) {
  
  return (
    <div className='about'>
        <Nav/>
        <div className='about-container'>
          <h1><span>유</span><span>기</span><span>동</span><span>물</span><span>을</span> <span>지</span><span>켜</span><span>줘</span></h1>
              
          <form onSubmit={(e) =>{
              e.preventDefault();
              //입력창에 입력된 값 참조(ref={inputRef})
              let val = inputRef.current.value;//입력요소의 현재 값 input값
              console.log("입력요소",val);
              //console.log("지역",animals[0].orgNm)
              if (val == '') {
                setSearch(val); //아무입력이 없을때 전체 보여주기
              } else {
                setSearch(Object(`&orgNm=${val}`));//입력값이 있으면 
              }
              setPageNo(1)
            }}>
              <input
              onInput={(e)=>{
                //console.log(e.target.value);
              }}
              ref={inputRef} type='search' name='s' placeholder='검색어 입력'
              ></input>
              <button>검색</button>
          </form>

          <p>Page: {pageNo} / {maxPages}</p>
          <p>{totalCount}건 등록</p>
          <div className='btngroup'>
            <button className='btnNext' onClick={prevPage}>이전 페이지</button>
            <button className='btnNext' onClick={nextPage}>다음 페이지</button>
          </div>

          {
            animals.map((animal, key) => {
              return(
                  <div className='itemList' key={key} >
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
