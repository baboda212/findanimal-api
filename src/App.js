import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect} from 'react';
//라우터에 연결할 페이지 불러오기
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const API_KEY = `%2BefalOjB2%2F4P8zlVJ%2BVlLxjqN1PS6NrVpqtyI3G%2F9WERm2OZRIB57ocCGqM81E5hIUU6%2F2LYYVyEgMxVauj6Sw%3D%3D`;
  const API_URL = `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?bgnde=20230101&endde=20231231&pageNo=1&numOfRows=100&serviceKey=${API_KEY}&_type=json`;

  const [animals, setAnimals] = useState([]);

  const getAnimalData = () =>{
    fetch(API_URL)
    .then(res => res.json())
    .then(data =>{
      console.log(data.response.body.items.item);
      const items = data.response.body.items.item;
      setAnimals(items);
    })
  }

  useEffect(() => {
    getAnimalData()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About animals = {animals}/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
