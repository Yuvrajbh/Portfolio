import './App.css';
import About from './components/About/About';
import Head from './components/Head/Head';
import Home from './components/Home/Home';
import Qual from './components/Qual/Qual';
import Services from './components/Services/Services';
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
     </main>
    </div>
  );
}

export default App;
