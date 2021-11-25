import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";
import Articles from './Articles';
import Summary from './Summary/Summary'
import Sort from './Sort/Sort'

class Algo extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Articles />} />
          <Route path='/Summary/*' element={<Summary />} />
          <Route path='/Sort/*' element={<Sort />} />
        </Routes>
      </>
    )
  }
}
export default Algo