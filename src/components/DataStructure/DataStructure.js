import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";
import Articles from './Articles';
import Basic from './Basic';

class DataStructure extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Articles />} />
          <Route path='/Basic/*' element={<Basic />} />
        </Routes>
      </>
    )
  }
}
export default DataStructure