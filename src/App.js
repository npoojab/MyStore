
import About from './About';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Services from './Services';
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <img src="https://www.w3schools.com/bootstrap/la.jpg" className='img-fluid'/>
      <Services></Services>
      {/* <BrowserRouter></BrowserRouter>
      <Routes>
        <Route>
        <Route path="about" element={<About />} ></Route>
        </Route>
      </Routes> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
