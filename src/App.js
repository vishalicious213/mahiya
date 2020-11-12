import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='split'>
        <Sidebar />
      </div>

      <section id='main'>
        <Header />
        <Projects />
        <Footer />
      </section>
    </div>
  );
}

export default App;
