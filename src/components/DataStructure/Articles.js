import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Articles.scss';

class Articles extends Component {
  render() {
    return (
      <div className="datastructure_articles">
        <div className="container">
          <Link to="/DataStructure/Basic" onClick="">
            <figure class="snip1200">
              <img src={process.env.PUBLIC_URL + '/img/DataStructure/Basic.png'} alt="Basic" />
              <figcaption>
                <p>배열, 스택, 큐, 연결 리스트, 해쉬 테이블, 그래프, 트리</p>
                <div class="heading">
                  <h2><span>자료 구조</span></h2>
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