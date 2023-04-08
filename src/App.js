import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 20;

  const [progress, setProgress] = useState(0);

   const setP = (p) => {
    setProgress(p)
  }
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
          />
          <Routes>
            <Route path='/' element={<News setProgress={setP} apiKey={apiKey} pageSize={pageSize} country='in' key='general' category='general' />} />
            <Route path='/business' element={<News setProgress={setP} apiKey={apiKey} pageSize={pageSize} country='in' category='business' key='business' />} />
            <Route path='/entertainment' element={<News setProgress={setP} apiKey={apiKey} pageSize={pageSize} country='in' category='entertainment' key='entertainment' />} />
            <Route path='/science' element={<News setProgress={setP} apiKey={apiKey} pageSize={pageSize} country='in' category='science' key='science' />} />
            <Route path='/health' element={<News setProgress={setP} apiKey={apiKey} pageSize={pageSize} country='in' category='health' key='health' />} />
            <Route path='/sports' element={<News setProgress={setP} apiKey={apiKey} pageSize={pageSize} country='in' category='sports' key='sports' />} />
            <Route path='/technology' element={<News setProgress={setP} apiKey={apiKey} pageSize={pageSize} country='in' category='technology' key='technology' />} />
            <Route path='/general' element={<News setProgress={setP} apiKey={apiKey} pageSize={pageSize} country='in' category='general' key='general' />} />

          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;
