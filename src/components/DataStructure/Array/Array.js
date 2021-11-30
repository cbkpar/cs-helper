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
                <h3 id="arraylist_add">Add</h3>
                <p>만약 정해진 크기만큼 꽉찬 상태에서 추가를 시도하려고하면 grow() 함수를 실행하여 크기를 증가시킨다</p>
                <p>1. 현재 리스트의 크기 + 1 이 수용량 을 초과하지 않는지 확인한다</p>
                <p>2. 만약 수용량을 초과한다면 현재 리스트의 1.5배 크기의 새로운 리스트를 만든다</p>
                <p>3. 새로 만들어진 리스트에 현재 리스트를 복사한다 O(n) 소요</p>
                <p>4. 마지막으로 리스트에 값을 추가한다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/7fe376de30fcfe41c553aae3a518adc4"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="arraylist_remove">Remove</h3>
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
                <p>크기가 가변적이다</p>
                <p>각 노드에 이전노드 주소와 다음노드 주소를 저장한다</p>
                <p>시간복잡도 : 조회 O(n), 수정 O(1), 삽입 O(1), 삭제 O(1)</p>
                <p>수정과 삽입 삭제 모두 O(1)이지만 해당 노드까지 가는데 O(n)이 걸린다</p>
                <p>가장 앞 혹은 뒤를 조회할 경우에는 O(1)의 시간복잡도를 갖는다</p>
                <h3 id="linkedlist_constructor">생성자</h3>
                <p>Node 클래스인 first, last를 갖으며 크기는 0이다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/b27f8998db8594b225efb38946ffc554"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="linkedlist_node">Node 클래스</h3>
                <p>Node 클래스는 해당 값과 이전노드, 다음노드의 주소를 갖고있다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/f26d601e9280ba1f858e6003ecd676f7"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="linkedlist_add">Add</h3>
                <p>prev에는 현재 마지막 노드의 주소</p>
                <p>next에는 null을 가진 노드를 생성한다</p>
                <p>LinkedList의 last에는 새로운 노드의 주소를 넣어준다</p>
                <p>만약 LinkedList의 l값이 null이라면 LinkedList의 first에 새로운 노드의 주소를 넣어준다</p>
                <p>그렇지 않다면 l값의 next값에 새로운 노드의 주소를 넣어준다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/cf31f7b042a0fc85a3629abd9ab9d023"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="linkedlist_remove">Remove</h3>
                <p>해당 인덱스가 정상적인 범위 인지 확인한다</p>
                <p>LinkedList의 크기를 반으로 나누어 더 가까운쪽으로 탐색을 한다</p>
                <p>해당노드의 prev값이 null일 경우 LinkedList의 first를 노드의 next 값으로 수정한다</p>
                <p>null이 아닐경우 prev.next 값을 해당노드의 next 값으로 바꾸고 해당노드의 prev 값을 null로 수정한다</p>
                <p>해당노드의 next값이 null일 경우 LinkedList의 last를 노드의 prev 값으로 수정한다</p>
                <p>null이 아닐경우 next.prev 값을 해당노드의 prev 값으로 바꾸고 해당노드의 next 값을 null로 수정한다</p>
                <p>마지막으로 해당노드의 값을 null로 바꾸어주고 해당 값을 리턴한다</p>
                <p>지워진 노드는 GC에 의해 나중에 처리된다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/8901dca33ee4573a81464e220dee191a"
                    loadingClass="loading__screen"
                  />
                </div>
                <h1 id="출처">출처</h1>
                <p><a href="https://sabarada.tistory.com/63" target="_blank">[자료구조] 코드로 알아보는 java의 ArrayList</a></p>
                <p><a href="https://sabarada.tistory.com/64" target="_blank">[자료구조] 코드로 알아보는 java의 LinkedList</a></p>
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