import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from "./Header/Header";

export default () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header />

  </BrowserRouter>
);