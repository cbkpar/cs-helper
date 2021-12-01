import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";
import Articles from './Articles';
import Basic from './Basic';
import Array from './Array';
import Queue from './Queue';
import Stack from './Stack';

class DataStructure extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Articles />} />
          <Route path='/Basic/*' element={<Basic />} />
          <Route path='/Array/*' element={<Array />} />
          <Route path='/Queue/*' element={<Queue />} />
          <Route path='/Stack/*' element={<Stack />} />
        </Routes>
      </>
    )
  }
}
export default DataStructure