import './App.css';
import imageone from './balloon.jpeg';
import imagetwo from './dreambottle.jpeg';
import { DreamsList } from './DreamsList';

function App() {
  return (
  <div className='app'>
    <div className='container'>
     <img src={ imageone } width="200px" alt='balloon'/>
     </div>
     <div className='container'>
     <h1>List of my Dreams</h1>
     </div>
     <DreamsList/>
     <div className='container'>
     <img src={ imagetwo } width="200px" alt='dreambottle'/>
     </div>
  </div>
  );
}

export default App;
