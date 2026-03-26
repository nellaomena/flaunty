import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';

import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      {/* navbar goes here */}
      <Navbar/>



      <header className="App-header">
        <h1>Welcome to FlauntyFlorals💄</h1>
        <img src="images/" alt="" />
        
      </header>
      {/* {NAV LINKS} */}
      <nav>
        <Link to = "/Addproduct" className='btn btn-danger btn-sm m-3'>Add product</Link>
        <Link to = "/" className='btn btn-danger btn-sm m-3'>Get product</Link>
        <Link to = "/Signup" className='btn btn-danger btn-sm m-3'>Sign up</Link>
        <Link to = "/Signin" className='btn btn-danger btn-sm m-3'>Sign in</Link>

      </nav>
      {/* {routing} */}

      <Routes>
        <Route path = '/' element={<Getproduct/>} />
        <Route path = '/Addproduct' element={<Addproduct/>} />
        <Route path = '/Signup' element= {<Signup/>}/>
        <Route path = '/Signin' element={<Signin/>} />
        <Route path = '/makepayment' element={<Mpesapayment/>} />
      </Routes>

      <footer class="bg-danger text-center">
        <b class="text-dark">Developed by Shannon &copy; 2026. All rights reserved!</b>
    </footer>
















    </div>
    </BrowserRouter>
  );
}

export default App;
