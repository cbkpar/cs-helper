import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Articles.scss';

class Articles extends Component {
  render() {
    return (
      <div className="algorithm_articles">
        <div className="container">
            <Link to="/Algorithm/Summary" onClick="">
              <figure class="snip1200">
                <img src={process.env.PUBLIC_URL + '/img/Algorithm/Summary.png'} alt="Summary" />
                <figcaption>
                  <p>시간복잡도, 공간복잡도, Big-O 표기법</p>
                  <div class="heading">
                    <h2>알고리즘<span> 기초</span></h2>
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