import { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <>
        <div className="Home">
          <div className="container">
            <Link to="/Algorithm" onClick="">
              <figure class="snip1200">
                <img src={process.env.PUBLIC_URL + '/img/Algorithm/index.png'} alt="Algorithm" />
                <figcaption>
                  <p>어떠한 문제를 풀기 위해 정해진 일련의 절차나 방법</p>
                  <div class="heading">
                    <h2><span>알고리즘</span></h2>
                  </div>
                </figcaption>
              </figure>
            </Link>
            <Link to="/DataStructure" onClick="">
            <figure class="snip1200">
              <img src={process.env.PUBLIC_URL + '/img/DataStructure/index.png'} alt="DataStructure" />
              <figcaption>
                <p>효율적인 접근 및 수정을 가능하게 하는 자료의 구조</p>
                <div class="heading">
                  <h2><span>자료구조</span></h2>
                </div>
              </figcaption>
            </figure>
            </Link>
            <Link to="/Database" onClick="">
            <figure class="snip1200">
              <img src={process.env.PUBLIC_URL + '/img/Database/index.png'} alt="Database" />
              <figcaption>
                <p>구조화된 정보 또는 데이터의 조직화된 모음</p>
                <div class="heading">
                  <h2><span>데이터베이스</span></h2>
                </div>
              </figcaption>
            </figure>
            </Link>
          </div>
        </div>
      </>
    )
  }
}
export default Home