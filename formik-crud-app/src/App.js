import './App.css';
import Navbar from './Components/Navbar';
import { Routes,Route } from 'react-router-dom';
import AddEmployee from './Pages/AddEmployee';
import ListEmployee from './Pages/ListEmployee'
import EditEmployee from './Pages/EditEmployee'
import ViewEmployee from './Pages/ViewEmployee';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='container'>
      <Navbar/>
              <Routes>
                    <Route path='/addEmployee' element={<AddEmployee/>}/>
                    <Route path='/' element={<ListEmployee/>}/>
                    <Route path='/viewEmployee/:id' element={<ViewEmployee/>}/>
                    <Route path='/editEmployee/:id' element={<EditEmployee/>}/>
              </Routes>
              <Footer/>
    </div>
  );
}

export default App;
