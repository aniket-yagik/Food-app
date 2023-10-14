// import logo from './logo.svg';
import './App.css';
import Team from './components/Team';
import About from './components/About';
import BacktoTop from './components/BacktoTop';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Reservation from './components/Reservation';
import Services from './components/Services';


function App() {
  document.title="Home"
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Services/>
    <About/>
    <Menu/>
    <Reservation/>
    <Team/>
    <Footer/>
    <BacktoTop/>
    </>

  );
}

export default App;
