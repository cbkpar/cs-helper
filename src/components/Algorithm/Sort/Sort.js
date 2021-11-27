import { Component, Fragment } from 'react';
import { Tocbot } from '../../Toc/Toc';
import ReactEmbedGist from 'react-embed-gist';
import BubbleSort from './BubbleSort';
import SelectionSort from './SelectionSort';
import InsertionSort from './InsertionSort';
import MergeSort from './MergeSort';
import HeapSort from './HeapSort';
import QuickSort from './QuickSort';
import CountSort from './CountSort';
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
                <p>앞에서부터 차례대로 이미 정렬된 배열 부분과 비교하여, 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘</p>
                <img src={process.env.PUBLIC_URL + '/img/Algorithm/insert-sort.png'} alt="insert-sort" />
                <div className="sortchart">
                  <InsertionSort />
                </div>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/91a3f5529b86573f37fbec320e18b481"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="병합정렬">합병 정렬</h3>
                <p>분할 정복(Divide and Conquer)의 방법을 사용하여 정렬</p>
                <img src={process.env.PUBLIC_URL + '/img/Algorithm/merge-sort.png'} alt="merge-sort" />
                <p>주어진 배열을 더이상 쪼갤 수 없을 때 까지 쪼갠 후에 하나로 합치며 정렬한다.</p>
                <div className="video"><iframe src="https://www.youtube.com/embed/QAyl79dCO_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="sortchart">
                  <MergeSort />
                </div>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/ea75edc6bbc7baabd233763ac3ce63b9"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="힙정렬">힙 정렬</h3>
                <p>힙 정렬은 <strong>힙 트리 구조</strong>를 이용하는 정렬 방법이다. </p>
                <p>힙 정렬을 수행하기 전에 우선 <strong>최대 힙 생성 알고리즘</strong>을 사용한다.</p>
                <p>최대 힙 생성 알고리즘은 특정한 노드의 두 자식중 더 큰 자식과 자신의 위치를 바꾸는 알고리즘</p>
                <p>힙의 루트에는 항상 가장 큰 값이 들어가게 되므로 배열의 n번째 값과 치환하며 힙정렬을 수행한다</p>
                <p>한번 수행할때마다 n을 1씩 줄여가며 n이 0보다 클때까지 진행한다</p>
                <div className="video"><iframe src="https://www.youtube.com/embed/iyl9bfp_8ag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <img src={process.env.PUBLIC_URL + '/img/Algorithm/heap-sort.png'} alt="heap-sort" />
                <div className="sortchart">
                  <HeapSort />
                </div>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/3f67e30f7e8a20b6b30729adc0353efd"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="퀵정렬">퀵 정렬</h3>
                <p>분할 정복과 재귀를 이용하여 정렬하는 알고리즘</p>
                <p>평균적으로 O(nlogn)이지만 최악의 경우 O(n^2)이다.</p>
                <img src={process.env.PUBLIC_URL + '/img/Algorithm/quick-sort.png'} alt="quick-sort" />
                <p>리스트 가운데서 하나의 원소를 고르고 피벗이라 한다</p>
                <p>피벗 앞은 피벗보다 값이 작은 원소, 피벗 뒤는 값이 큰 원소로 나눈다.</p>
                <p>재귀적으로 위 방법을 반복하여 리스트의 크기가 1과 같거나 작을때까지 반복한다.</p>
                <p>재귀 호출이 한번 진행 될 때마다 최소 하나 이상의 원소 위치가 정해지므로 유한성이 보장된다.</p>
                <div className="video"><iframe width="1280" height="720" src="https://www.youtube.com/embed/7BDzle2n47c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="sortchart">
                  <QuickSort />
                </div>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/45af66146c58c003fc74c1ee8b189749"
                    loadingClass="loading__screen"
                  />
                </div>
                <h2 id="분산식정렬">분산식 정렬</h2>
                <p>
                  값들을 여러개의 부분 집합으로 분해하고 정렬하여 전체를 정렬하는 방법
                </p>
                <h3 id="계수정렬">계수 정렬</h3>
                <p>값의 범위가 크지 않고 데이터의 수가 클 때 유용한 알고리즘</p>
                <p>원소의 범위 크기에 해당하는 배열을 만들고 데이터의 값을 넣고 개수를 세서 정렬</p>
                <p>시간복잡도 : O(n+k) [n : 데이터의 수, k : 데이터의 범위]</p>
                <div className="sortchart">
                  <CountSort />
                </div>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/7328e3cc3c07095efcc15d00d13ae697"
                    loadingClass="loading__screen"
                  />
                </div>
                
                <h3 id="기수정렬">기수 정렬</h3>
                <h2 id="시간복잡도비교">시간복잡도 비교</h2>
                <img src={process.env.PUBLIC_URL + '/img/Algorithm/sort-time-complexity2.png'} alt="Sort-complexity" />
                <p>버블, 선택, 삽입 정렬의 경우 모두 시간복잡도가 O(n^2) 이지만 평균적으로는 삽입정렬이 그중 가장 효율이 좋다.</p>
                <img src={process.env.PUBLIC_URL + '/img/Algorithm/sort-time-complexity.png'} alt="Sort-complexity" />
                <p>
                  다양한 정렬을 
                  <a href="https://www.toptal.com/developers/sorting-algorithms" target="_blank"><strong> [여기] </strong></a>
                  에서 애니메이션으로 비교해 볼 수 있다.
                </p>
                <h1 id="출처">출처</h1>
                <p><a href="https://medium.com/@joongwon/%EC%A0%95%EB%A0%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B8%B0%EC%B4%88-805391cb088e" target="_blank">정렬 알고리즘의 기초</a></p>
                <p><a href="https://gmlwjd9405.github.io/2018/05/06/algorithm-selection-sort.html" target="_blank">선택 정렬 이란</a></p>
                <p><a href="https://velog.io/@dongchyeon/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%82%BD%EC%9E%85-%EC%A0%95%EB%A0%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-gnrmum6r" target="_blank">[알고리즘] 삽입 정렬 알고리즘</a></p>
                <p><a href="https://st-lab.tistory.com/233" target="_blank">자바 [JAVA] - 합병정렬 / 병합정렬 (Merge Sort)</a></p>
                <p><a href="https://blog.naver.com/ndb796/221228342808" target="_blank">힙 정렬(Heap Sort)</a></p>
                <p><a href="https://www.daleseo.com/sort-quick/" target="_blank">[알고리즘] 퀵 정렬 - Quick Sort (Python, Java)</a></p>
                <p><a href="https://ko.wikipedia.org/wiki/%ED%80%B5_%EC%A0%95%EB%A0%AC" target="_blank">위키백과 - 퀵 정렬</a></p>
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