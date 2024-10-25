
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Story from './pages/Story';
import ClassList from './pages/ClassList';
import WantClass from './pages/WantClass';
import StoryList from './pages/StoryList';

import { MainContext } from './context';
import { useEffect, useState } from "react";
import FirstGrade from './pages/FirstGrade';
import Footer from './components/Footer/Footer';
import GradePage from './pages/GradePage';
import Kelimetre from './pages/Kelimetre';
function App() {
  const [classList, setClassList] = useState([]);
  const [grade, setGrade] = useState(0)

  useEffect(() => {
    const savedClassList = localStorage.getItem("classList");
    if (savedClassList) {
      setClassList(JSON.parse(savedClassList));
    }
  }, [grade]);

  const data = {
    grade,
    setGrade
  }
  return (
    <MainContext.Provider value={data}>
      <div className="appContainer">
      <main className='app'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={classList.length > 0 ? <GradePage /> : <WantClass />} />
            <Route path="stories" element={<Story/>} />
            <Route path="storyList" element={<StoryList />} />
            <Route path="classList" element={<ClassList />} />
            <Route path="firstGrade" element={<FirstGrade />} />
            <Route path="kelimetre" element={<Kelimetre/>} />
            <Route path="grades" element={<GradePage />} />
            <Route path="*" element={classList.length > 0 ? <GradePage /> : <WantClass />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer/>
      </div>
    </MainContext.Provider>
  )
}

export default App
