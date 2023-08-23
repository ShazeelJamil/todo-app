import Navbar from './Components/Navbar';
import './App.css';
import Home from './pages/Home';
import Todo from './pages/Todo';
import {Toaster} from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toaster/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
