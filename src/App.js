import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
   
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
      switch (currentPage) {
          case "About":
              return <About />;
          case "Portfolio":
              return <Portfolio />;
          case "Contact":
              return <Contact />;
          case "Resume":
              return <Resume />;
          default:
              return <About />;
      }
  };  
  
  return (
    <div>
      
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} ></Header>
      
      <main>
        <div> {renderPage(currentPage)} </div>
      </main>
      
      <Footer></Footer>
    
    </div>
  );
}

export default App;
