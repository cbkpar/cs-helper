import { Component, Fragment } from 'react';
import { Tocbot } from '../../Toc/Toc';
import ReactEmbedGist from 'react-embed-gist';

class Array extends Component {
  render() {
    return (
      <>
        <Fragment>
          <main className="content">
            <div className="article-container container-lg">
              <article className="article-content js-toc-content">
                <h1 id="배열">배열</h1>
                <div className="video"><iframe src="https://www.youtube.com/embed/8WSStCUPhmk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <h2 id="Array">Array</h2>
                <p>선형 자료구조</p>
                <p>한번 크기를 할당하면 변경할 수 없다</p>
                <p>배열 초기화시 메모리에 할당되어 ArrayList보다 빠르다</p>
                <p>시간복잡도 : 조회 O(1), 수정 O(1)</p>
                <h2 id="ArrayList">ArrayList</h2>
                <p>선형 자료구조</p>
                <p>크기가 가변적이다</p>
                <p>구성은 Array로 되어있기 때문에 Array의 특성을 갖는다</p>
                <p>데이터 추가 삭제시 메모리를 재할당하기 때문에 속도가 Array보다 느리다</p>
                <p>시간복잡도 : 조회 O(1), 수정 O(1), 삽입 O(n), 삭제 O(n)</p>
                <h3 id="initialsize">초기 공간</h3>
                <p>ArrayList는 기본적으로 10의 크기를 갖는다</p>
                <p>생성자 함수가 오버로딩 되어있으므로 크기를 지정 할 수 있다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/aef91de59a18333d1004c4daaf8dc2a1"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="add">Add</h3>
                <p>만약 정해진 크기만큼 꽉찬 상태에서 추가를 시도하려고하면 grow() 함수를 실행하여 크기를 증가시킵니다</p>
                <p>1. 현재 리스트의 크기 + 1 이 수용량 을 초과하지 않는지 확인한다</p>
                <p>2. 만약 수용량을 초과한다면 현재 리스트의 1.5배 크기의 새로운 리스트를 만든다</p>
                <p>3. 새로 만들어진 리스트에 현재 리스트를 복사한다 O(n) 소요</p>
                <p>4. 마지막으로 리스트에 값을 추가한다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/7fe376de30fcfe41c553aae3a518adc4"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="add">Remove</h3>
                <p>삭제에는 인덱스를 사용할 수 있고 객체를 사용할 수 있다</p>
                <p>1-1. 인덱스 삭제시에는 우선 삭제할 인덱스의 범위가 올바른지 확인 한다</p>
                <p>1-2. 만약 올바르지 않는 범위에 속한다면 IndexOutOfBoundsException를 반환한다</p>
                <p>1-3. 올바른 범위 일경우 지워질 원소위치+1 부터 마지막까지 배열을 복사하여 지워질 원소위치에서 마지막-1 까지 복사한다</p>
                <p>1-4. 마지막으로 마지막값을 null로 바꿔주어 GC가 올바르게 작동하도록하며 크기를 1 줄인다</p>
                <img src={process.env.PUBLIC_URL + '/img/DataStructure/array-arraylist-remove.png'} alt="arraylist-remove" />
                <p>2-1. 객체를 이용해 삭제할 경우에는 해당객체가 빈 객체 인경우와 아닌 경우로 생각한다</p>
                <p>2-2. 빈 객체 인경우 null 값을 이용해 비교해 제거한다</p>
                <p>2-3. 빈 객체가 아닌경우 해당 객체의 equals를 이용해 일치하는 것을 제거한다</p>
                <p>2-4. 아무것도 발견되지 않을 경우 false를 반환한다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/b738d7b9980ee567b7b1732097cad3b5"
                    loadingClass="loading__screen"
                  />
                </div>
                <h2 id="LinkedList">LinkedList</h2>
                <p>선형 자료구조</p>
                <h1 id="출처">출처</h1>
                <p><a href="https://sabarada.tistory.com/63" target="_blank">[자료구조] 코드로 알아보는 java의 ArrayList</a></p>
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
export default Array