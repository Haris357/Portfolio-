import './App.css';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <>
    <Navbar/>
    <Profile/>
    <Services/>
    <Experiences/>
    <Projects/>
    <Footer/>
    </>
  );
}

export default App;
