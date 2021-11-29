import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";
import Articles from './Articles';
import Isolation from './Isolation';
import Lock from './Lock';

class Database extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Articles />} />
          <Route path='/Isolation/*' element={<Isolation />} />
          <Route path='/Lock/*' element={<Lock />} />
        </Routes>
      </>
    )
  }
}
export default Database