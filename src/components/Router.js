import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Algo from './Algorithm';
import Header from "./Header/Header";
import Home from "./Home/Home";

export default () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/Algorithm/*' element={<Algo />} />
      <Route path='*' element={<Home />} />
    </Routes>
  </BrowserRouter>
);