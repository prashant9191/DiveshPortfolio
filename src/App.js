import './App.css';
import React, { useState, useEffect } from 'react';
import Loader from './Components/Loader/Loader'; // Import the Loader component here
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Exprience from './Components/Exprience/Exprience';
import Exp_Content from "./Components/Exp_Content/Exp_Content";
import MyJourney from './Components/MyJourney/MyJourney';
import WhatCan from './Components/WhatCan/WhatCan';
import Works from './Components/Works/Works';
import Scrollbtn from "./Components/ScrollBtn/ScrollBtn";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  return (
    <div>
      {isLoading ? <Loader /> : null}
      <Header />
      <Banner />
      <Exprience />
      <Exp_Content />
      <MyJourney />
      <WhatCan />
      <Works />
      <Scrollbtn />
    </div>
  );
}

export default App;
