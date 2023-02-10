/* About.js */
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About({animals, pageNo, maxPages, prevPage, nextPage, totalCount, setSearch,search}) {

  /* const OPTIONS = [
    { value: "6110000", name: "서울특별시" },
    { value: "6260000", name: "부산광역시" },
    { value: "6270000", name: "대구광역시" },
  ];
  
  const SelectBox = (props) => {
    const handleChange = (e) => {
      // event handler
      setSearch(e.target.value)
      console.log(e.target.value);
      
    };
    return (
      <select onChange={handleChange}>
        {props.options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={props.defaultValue === option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    );
  }; */

  return (
    <div className='about'>
        <Nav/>

        <div className='about-container'>
          <h1><span>유</span><span>기</span><span>동</span><span>물</span><span>을</span> <span>지</span><span>켜</span><span>줘</span></h1>

          {/* <SelectBox options={OPTIONS} defaultValue="6110000"></SelectBox> */}

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
        <div className='btngroup'>
            <button className='btnNext' onClick={prevPage}>이전 페이지</button>
            <button className='btnNext' onClick={nextPage}>다음 페이지</button>
        </div>
        <Footer/>   
    </div>
  )
}
