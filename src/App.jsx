
import React from 'react';
import Header from './components/Header'; 
import Hero from './components/Hero'; 
import About from './components/About'; 
import Projects from './components/Projects'; 
import Skills from './components/Skills'; 
import Contact from './components/Contact'; 

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Deepu Varanasi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;