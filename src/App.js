import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Header  from './Components/Header/Header';
import Main from './Components/Main/Mainpage';
import { Footer } from './Components/Footer/Footer';
import GameAlmaty from './Components/Game/Almaty/GameAlmaty';
import GameAstana from './Components/Game/Astana/GameAstana';
import GameKazakhstan from './Components/Game/Kazakhstan/GameKazakhstan';
import Scroll from './Scroll';
import { internalFrenchkiss } from './kek';

function App() {

  return (
    <>
    <BrowserRouter>
    <Scroll/>
    <Header/>
    <Routes>
    
      <Route path='/' element={<Main />}/>
      <Route path='/Almaty' element={<GameAlmaty />} />
      <Route path='/Nursultan' element={<GameAstana />}/>
      <Route path='/Kazakhstan' element={<GameKazakhstan />}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  
  );
}

export default App;












