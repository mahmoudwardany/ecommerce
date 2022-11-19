
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import Home from './components/Home/Home';
import Navbars from './components/navbar/Navbars';
import { BrowserRouter  } from 'react-router-dom';
import Footers from './components/footer/Footers';
import Info from './components/info/Info';
import Greeting from './components/greeting/Greeting';

function App() {
  return (
    <BrowserRouter>
    <Navbars/>
<Routes>
  
  <Route path='/' element={<Home/>}/>
  <Route path='cart' element={<Cart/>}/>
<Route path='info'element={<Info/>}/>
<Route path='greeting'element={<Greeting/>}/>
</Routes>
<Footers/>
    </BrowserRouter>

  );
}

export default App;
