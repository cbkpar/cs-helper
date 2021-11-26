import { Component, Fragment } from 'react';
import { Tocbot } from '../../Toc/Toc';
import ReactEmbedGist from 'react-embed-gist';
import BubbleSort from './BubbleSort';
import SelectionSort from './SelectionSort';
import './Sort.scss';

class Sort extends Component {
  render() {
    return (
      <>
        <Fragment>
          <main className="content">
            <div className="article-container container-lg">
              <article className="article-content js-toc-content">
                <h1 id="정렬">정렬</h1>
                <h2 id="비교식정렬">비교식 정렬</h2>
                <p>
                  각 값을 2개씩 비교하여 교환하는 방법으로 정렬
                </p>
                <h3 id="버블정렬">버블 정렬</h3>
                <p>서로 <strong>인접한</strong> 값을 비교하며 순서대로 되어 있지 않으면 서로 교환한다.</p>
                <div className="sortchart">
                  <BubbleSort />
                </div>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/3d72219d1df78c00a5cc63249517a2c3"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="선택정렬">선택 정렬</h3>
                <p>데이터에서 가장 작은 값을 선택하여 가장 앞의 데이터와 교환 해나간다.</p>
                <img src={process.env.PUBLIC_URL + '/img/Algorithm/selection-sort.png'} alt="selection-sort" />
                <div className="sortchart">
                  <SelectionSort />
                </div>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/995cd825e90797bb7c1afc658a31dbc7"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="삽입정렬">삽입 정렬</h3>
                <h3 id="머지정렬">머지 정렬</h3>
                <h3 id="힙정렬">힙 정렬</h3>
                <h3 id="퀵정렬">퀵 정렬</h3>
                <h2 id="분산식정렬">분산식 정렬</h2>
                <p>
                  값들을 여러개의 부분 집합으로 분해하고 정렬하여 전체를 정렬하는 방법
                </p>
                <h3 id="계수정렬">계수 정렬</h3>
                <h3 id="기수정렬">기수 정렬</h3>
                <h2 id="비교">비교</h2>
                <img src={process.env.PUBLIC_URL + '/img/Algorithm/sort-time-complexity.png'} alt="Sort-complexity" />
                <p>
                  다양한 정렬을 
                  <a href="https://www.toptal.com/developers/sorting-algorithms" target="_blank"><strong> [여기] </strong></a>
                  에서 애니메이션으로 비교해 볼 수 있다.
                </p>
                <h1 id="출처">출처</h1>
                <p><a href="https://medium.com/@joongwon/%EC%A0%95%EB%A0%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B8%B0%EC%B4%88-805391cb088e" target="_blank">정렬 알고리즘의 기초</a></p>
                <p><a href="https://gmlwjd9405.github.io/2018/05/06/algorithm-selection-sort.html" target="_blank">선택 정렬 이란</a></p>
              </article>

              <div className="article-sidebar">
                <nav className="toc js-toc">
                </nav>
              </div>
            </div>
            <Tocbot />
          </main>
        </Fragment>
      </>
    )
  }
}
export default Sort