import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef} from 'react';
//라우터에 연결할 페이지 불러오기
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import getFormatDate from './Date_f'; //날짜 포맷 함수 

function App() {
  const [animals, setAnimals] = useState([]);
  const [totalCount, setTotalCount] = useState(0); // 총 글수
  const [pageNo, setPageNo] = useState(1);  // 페이지번호
  const [maxPages, setMaxPages] = useState(0); // 마지막 페이지
  const [rows, setRows] = useState(10); // 화면당 글수
  const [search, setSearch] = useState(''); //검색어
  const inputRef = useRef();//검색창요소의 위치 참조
  
    const getAnimalData =  () =>{
      const API_KEY = `%2BefalOjB2%2F4P8zlVJ%2BVlLxjqN1PS6NrVpqtyI3G%2F9WERm2OZRIB57ocCGqM81E5hIUU6%2F2LYYVyEgMxVauj6Sw%3D%3D`;
      const day = getFormatDate(new Date()); 
      const API_URL = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20230101&endde=${day}&pageNo=${pageNo}&numOfRows=${rows}&serviceKey=${API_KEY}&_type=json&state=${search}`;
      //console.log(day);

    fetch(API_URL)
    .then(res => res.json())
    .then(data =>{
      //console.log(data.response.body.items.item);
      const items = data.response.body.items.item;
      // 데이터를 state에 저장
      setAnimals(items);
      
      //전체글
      setTotalCount(data.response.body.totalCount);
      // 마지막 페이지(총게시물 / 행수)
      setMaxPages(Math.ceil(totalCount / rows));
      //console.log(Math.ceil(totalCount / rows))
      
    })
    .catch(() =>{
      console.log('데이터 요청 에러')
      setAnimals([])
    })
  };

  // 이전 페이지
  const nextPage = () => {
    if(pageNo < maxPages) setPageNo(pageNo + 1)
  }

  // 다음 페이지
  const prevPage = () => {
    if(pageNo > 1) setPageNo(pageNo - 1);
  }

  //페이지번호 바뀌면API요청
  useEffect(() => {
    getAnimalData();
  }, [ pageNo, totalCount, search ])

  //console.log('animals = ', animals)
  //console.log('totalCount = ', totalCount)
  //console.log('maxPages = ', maxPages);
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About animals = {animals} pageNo = {pageNo} maxPages ={maxPages} nextPage = {nextPage} prevPage = {prevPage} totalCount = {totalCount} inputRef = {inputRef} setSearch = {setSearch} setPageNo={setPageNo} search = {search}/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
