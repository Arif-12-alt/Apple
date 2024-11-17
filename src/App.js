import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HOme from './Components/HOme';
import { Route, Routes } from 'react-router-dom';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import Micromax from './Components/Micromax';

function App() {
  return (
    <div className="App">
       <Navbar/>
      <Routes>
        <Route path='/' element={<HOme></HOme>} />
        <Route path='blog' element={<Blog></Blog>} />
        <Route path='micromax' element={<Micromax></Micromax>} />
      </Routes>
      <hr/>
    <Footer/>
    </div>
  );
}

export default App;
