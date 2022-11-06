
import './App.css';
import NavBar from './module/NavBar';
import News from './module/News';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react';
import {
  BrowserRouter ,
  Route,
  Routes,

} from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0)
  return (
    <>
      
      
      <BrowserRouter>
      <NavBar />
      <LoadingBar
        height={3}
        color='white'
        progress={progress} 
        style={{boxShadow:"0px 2px 6px 0px lightblue"}}
      />
      <div className="container my-3" >
        <Routes>
        <Route exact path="/"   element={<News key="general" setProgress={setProgress}  category="general"/>}/>
          <Route exact path="/science"  element={<News key="science" setProgress={setProgress} category="science"/>}/>
          <Route exact path="/sports" element={<News  key="sports" setProgress={setProgress} category="sports"/>}/>
          <Route exact path="/health" element={<News key="health" setProgress={setProgress}  category="health"/>}/>
          <Route exact path="/entertainment" element={<News  key="entertaiment" setProgress={setProgress} category="entertainment"/>}/>
        </Routes>
        </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;
