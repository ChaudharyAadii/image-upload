import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Register from './Components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
