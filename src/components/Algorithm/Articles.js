import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Articles extends Component {
  render() {
    return (
      <div className="algorithm_articles">
        <ul>
          <li><Link to="/Algorithm/Summary" onClick="">개요</Link></li>
        </ul>
      </div>
    )
  }
}
export default Articles