import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";
import Articles from './Articles';
import Isolation from './Isolation';

class Database extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Articles />} />
          <Route path='/Isolation/*' element={<Isolation />} />
        </Routes>
      </>
    )
  }
}
export default Database