import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
     
      <Routes>
      <Route path="/login" element={<Login/>}>Login</Route>
      <Route path="/register" element={<Register/>}>Login</Route>
      <Route path="/add" element={<AddProduct/>}>Login</Route>
      <Route path="/update" element={<UpdateProduct/>}>Login</Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
