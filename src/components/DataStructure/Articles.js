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
          <Link to="/DataStructure/Array" onClick="">
            <figure class="snip1200">
              <img src={process.env.PUBLIC_URL + '/img/DataStructure/Array.png'} alt="Array" />
              <figcaption>
                <p>Array, ArrayList, LinkedList</p>
                <div class="heading">
                  <h2><span>배열</span></h2>
                </div>
              </figcaption>
            </figure>
          </Link>
          <Link to="/DataStructure/Queue" onClick="">
            <figure class="snip1200">
              <img src={process.env.PUBLIC_URL + '/img/DataStructure/Queue.png'} alt="Queue" />
              <figcaption>
                <p>Queue, Deque, Priority Queue</p>
                <div class="heading">
                  <h2><span>큐</span></h2>
                </div>
              </figcaption>
            </figure>
          </Link>
          <Link to="/DataStructure/Stack" onClick="">
            <figure class="snip1200">
              <img src={process.env.PUBLIC_URL + '/img/DataStructure/Stack.png'} alt="Stack" />
              <figcaption>
                <p>Stack, Vector</p>
                <div class="heading">
                  <h2><span>스택</span></h2>
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