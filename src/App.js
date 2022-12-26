import React from 'react';
import './App.css';
import { ScrollUp } from './components';
import { Header, Home, About, Skills, Qualification, Contact, Footer } from './sections';
import Portfolio from './sections/portfolio/Portfolio';

const App = () => {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
