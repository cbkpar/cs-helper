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
          <Link to="/Algorithm/Sort" onClick="">
            <figure class="snip1200">
              <img src={process.env.PUBLIC_URL + '/img/Algorithm/Sort.png'} alt="Sort" />
              <figcaption>
                <p>버블 정렬, 선택 정렬, 삽입 정렬, 머지 정렬, 힙 정렬, 퀵 정렬, 계수 정렬, 기수 정렬</p>
                <div class="heading">
                  <h2><span>정렬</span></h2>
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