import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Manager from './components/Manager';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <div className='min-h-full'></div>
    <Manager/>
    <Footer/>
    </>
  );
}

export default App;
