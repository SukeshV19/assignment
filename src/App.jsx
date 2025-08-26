import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Slide1 from './slides/slide-1';
import Slide2 from './slides/slide-2';
import Slide3 from './slides/slide-3';
import Slide4 from './slides/slide-4';
import Slide5 from './slides/slide-5';
import Slide6 from './slides/slide-6';

function App() {
  
  return (
    <BrowserRouter>
      <div className='flex items-center overflow-x-auto gap-3'>
        <Link to='/slide-1' className='bg-gray-200 p-2 rounded'>Slide 1</Link>
        <Link to='/slide-2' className='bg-gray-200 p-2 rounded'>Slide 2</Link>
        <Link to='/slide-3' className='bg-gray-200 p-2 rounded'>Slide 3</Link>
        <Link to='/slide-4' className='bg-gray-200 p-2 rounded'>Slide 4</Link>
        <Link to='/slide-5' className='bg-gray-200 p-2 rounded'>Slide 5</Link>
        <Link to='/slide-6' className='bg-gray-200 p-2 rounded'>Slide 6</Link>
      </div>
      
      <Routes>
        <Route path='/slide-1' element={<Slide1/>}/>
        <Route path='/slide-2' element={<Slide2/>}/>
        <Route path='/slide-3' element={<Slide3/>}/>
        <Route path='/slide-4' element={<Slide4/>}/>
        <Route path='/slide-5' element={<Slide5/>}/>
        <Route path='/slide-6' element={<Slide6/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
