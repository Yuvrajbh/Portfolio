import './App.css';
import About from './components/About/About';
import Contractt from './components/Cont/Contractt';
import Footer from './components/Footer/Footer';
import Head from './components/Head/Head';
import Home from './components/Home/Home';
import Qual from './components/Qual/Qual';
// import Services fr om './components/Services/Services';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <Head/>
     <main className="main">
      <Home/>
      <About></About>
      <Skills/>
     <Qual/>
     <Contractt/>
     
     </main>
     <Footer/>
    </div>
  );
}

export default App;
