import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/Navbar';
import { Home } from './component/page/Home';
import { Job } from './component/page/Job';
import { Contact } from './component/page/Contact';
import { Button } from './component/Button';
import { Form } from './component/Form';
function App() {
  return (
    <div className="App">
<Navbar/>
<Routes>
  <Route path='/' element={<Button/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/jobs' element={<Job/>}/>
  <Route path='/form' element={<Form/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
    </div>
  );
}

export default App;
