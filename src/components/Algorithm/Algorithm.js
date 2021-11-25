import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";
import Articles from './Articles';
import Summary from './Summary/Summary'

class Algo extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Articles />} />
          <Route path='/Summary/*' element={<Summary />} />
        </Routes>
      </>
    )
  }
}
export default Algo