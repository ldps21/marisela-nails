import './App.css';
import Header from './components/Header';
import './components/Navbar';
import Navbar from './components/Navbar';
import ServiceIcons from './components/ServiceIcons';
import ServiceCards from './components/ServiceCards';
import ContactIcons from './components/ContactIcons';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <ServiceIcons/>
      <ServiceCards/>
      <ContactIcons/>
    </div>
  );
}

export default App;
