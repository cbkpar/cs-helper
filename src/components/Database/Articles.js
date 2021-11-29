import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Articles.scss';

class Articles extends Component {
  render() {
    return (
      <div className="database_articles">
        <div className="container">
          <Link to="/Database/Lock" onClick="">
            <figure class="snip1200">
              <img src={process.env.PUBLIC_URL + '/img/Database/Lock.png'} alt="Lock" />
              <figcaption>
                <p>Transaction, Shared Lock, Exclusive Lock</p>
                <div class="heading">
                  <h2><span>DB Lock</span></h2>
                </div>
              </figcaption>
            </figure>
          </Link>
          <Link to="/Database/Isolation" onClick="">
            <figure class="snip1200">
              <img src={process.env.PUBLIC_URL + '/img/Database/Isolation.png'} alt="Isolation" />
              <figcaption>
                <p>Read Uncommitted, Read Committed, Repeatable Read, Serializable</p>
                <div class="heading">
                  <h2><span>격리 수준</span></h2>
                </div>
              </figcaption>
            </figure>
          </Link>
        </div>
      </div>
    )
  }
}
export default Articles