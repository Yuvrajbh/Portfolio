import './App.css';
import About from './components/About/About';
import Head from './components/Head/Head';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Head/>
     <main className="main">
      <Home/>
      <About/>
     </main>
    </div>
  );
}

export default App;
