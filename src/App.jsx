import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Slide1 from './slides/slide-1';
import Slide2 from './slides/slide-2';
import Slide3 from './slides/slide-3';
import Slide4 from './slides/slide-4';
import Slide5 from './slides/slide-5';
import Slide6 from './slides/slide-6';
import Slide7 from './slides/slide-7';
import Shein1 from './slides/shein-1';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shein1/>}/>
        <Route path='/slide-1' element={<Slide1/>}/>
        <Route path='/slide-2' element={<Slide2/>}/>
        <Route path='/slide-3' element={<Slide3/>}/>
        <Route path='/slide-4' element={<Slide4/>}/>
        <Route path='/slide-5' element={<Slide5/>}/>
        <Route path='/slide-6' element={<Slide6/>}/>
        <Route path='/slide-7' element={<Slide7/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
