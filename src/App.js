import './App.css';
import Experiences from './components/Experiences';
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
    </>
  );
}

export default App;
