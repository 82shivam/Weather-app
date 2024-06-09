
import './App.css';

import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from './Components/Weather';
import NoPage from './Components/NoPage';


function App() {
  return (
    <>
       <BrowserRouter>
       <Nav/>

       <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path='/weather' element={<Weather/>}></Route>

       <Route path="*" element={<NoPage />} ></Route>

       </Routes>
       </BrowserRouter>



<Footer/>
    


    </>
  );
}

export default App;
