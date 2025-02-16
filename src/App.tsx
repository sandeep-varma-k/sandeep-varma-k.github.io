import React, {useEffect, useState} from 'react';
import './App.css';
import FadeIn from "./components/FadeIn";
import {Expertise, Footer, Main, Navigation, Timeline} from "./components";


function App() {
  const [mode, setMode] = useState<string>('dark');

  const handleModeChange = () => {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  }

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
      <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
          <Main/>
          <Expertise/>
          <Timeline/>
          {/*<Project/>*/}
          {/*<Contact/>*/}
        </FadeIn>
        <Footer />
      </div>
  );
}


export default App;
