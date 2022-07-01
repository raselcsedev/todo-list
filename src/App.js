import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calender from './Pages/Calender/Calender';
import CompletedTAsk from './Pages/CompletedTask/CompletedTAsk';
import Footer from './Pages/Footer/Footer';
import Navbar from './Pages/Header/Navbar';
import Home from './Pages/Home/Home';
import ToDoList from './Pages/ToDoList/ToDoList';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='completedTask' element={<CompletedTAsk></CompletedTAsk>}></Route>
      <Route path='todoList' element={<ToDoList></ToDoList>}></Route>
      <Route path='calender' element={<Calender></Calender>}></Route>
      
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
