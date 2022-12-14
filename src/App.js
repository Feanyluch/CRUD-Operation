import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './Component/Pages/Home';
import './App.css';
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';
import Navbar from './Component/Layout.js/Navbar';
import {Routes, Route} from 'react-router-dom'
import PageNotFound from './Component/Pages/PageNotFound';
import AddUser from './Component/users/AddUser';
import EditUser from './Component/users/EditUser';
import User from './Component/users/User';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/user/add' element={<AddUser />}></Route>
          <Route path='/user/Edit/:id' element={<EditUser />}></Route>
          <Route path='/user/:id' element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
