import { Component, Fragment } from 'react';
import { Tocbot } from '../../Toc/Toc';
import ReactEmbedGist from 'react-embed-gist';

class Queue extends Component {
  render() {
    return (
      <>
        <Fragment>
          <main className="content">
            <div className="article-container container-lg">
              <article className="article-content js-toc-content">
                <h1 id="큐">큐</h1>
                <h2 id="Array">Queue</h2>
                <div className="video"><iframe src="https://www.youtube.com/embed/W3jNbNGyjMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <p>먼저 넣은 것이 먼저 나오는 성질이 있다(FIFO, FCFS)</p>
                <p>LinkedList를 이용하여 쉽게 사용할 수 있다</p>
                <img src={process.env.PUBLIC_URL + '/img/DataStructure/collection.png'} alt="collection" />
                <p>Collection을 상속받는 Interface</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/161621571775a44bc054b2da8d2f8fa0"
                    loadingClass="loading__screen"
                  />
                </div>
                <p>LinkedList의 기능을 그대로 가져다 사용한다</p>
                <h3 id="queue_add">add</h3>
                <p>마지막 노드에 새로운 노드를 만들어 연결시켜 준다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/1618087ad0f9735294d8a550bf93b819"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="queue_offer">offer</h3>
                <p>add와 같은 기능을 수행하지만 예외사항에서 차이가 있다</p>
                <p>Queue가 가득차 예외가 발생할 경우 false를 반환한다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/7c028031e9cecd3313600a8c081a204e"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="queue_poll">poll</h3>
                <p>Queue가 비어있다면 null값을 반환하고 그렇지 않다면 가장 앞에 있는 값을 반환한다</p>
                <p>반환 후에 해당 값을 제거한다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/c6bb54115b7ceae23f38df42cc5d9cf0"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="queue_remove">remove</h3>
                <p>poll과 같은 기능을 수행하지만 Queue에 값이 없다면 NoSuchElementException()을 반환한다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/071ec0eeb3d2d25358641ac6d882546d"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="queue_peek">peek</h3>
                <p>Queue가 비어있다면 null값을 반환하고 그렇지 않다면 가장 앞에 있는 값을 반환한다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/e4bf04943f7aec9c7f68e8c079e37c41"
                    loadingClass="loading__screen"
                  />
                </div>
                <p></p>
                <h3 id="queue_element">element</h3>
                <p>peek와 같은 기능을 수행하지만 Queue에 값이 없다면 NoSuchElementException()을 반환한다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/4d741362be66234bf4ae874ec698f1e9"
                    loadingClass="loading__screen"
                  />
                </div>
                <img src={process.env.PUBLIC_URL + '/img/DataStructure/queue-methods.png'} alt="queue-methods" />
                <h2 id="Deque">Deque</h2>
                <div className="video"><iframe src="https://www.youtube.com/embed/DEXpIZpfqiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <p>덱은 앞, 뒤로 원소를 넣고 뺄 수 있다(큐, 스택)</p>
                <p>추가하고 삭제하는과정에서 O(1)의 시간복잡도를 갖게된다</p>
                <p>Queue 인터페이스를 상속받아서 만든다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/658b69c7f11ab14943d3c36bb293e5a8"
                    loadingClass="loading__screen"
                  />
                </div>
                <p>Deque은 LinkedList 혹은 ArrayDeque를 통해 구현할 수 있다</p>
                <p>LinkedList를 이용할 경우 Queue에서 설명한 메커니즘과 같은 원리로 작동한다</p>
                <p>아래 내용은 ArrayDeque를 사용했을 경우를 설명한다</p>
                <p>ArrayDeque는 ArrayList의 원리와 비슷하게 작동한다</p>
                <h3 id="deque_constructor">생성자</h3>
                <p>생성시에 16개 크기의 공간을 만든다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/1c8203900fadea650a71fbb79521d86d"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="deque_add">Add</h3>
                <p>덱의 앞에 추가 할 경우에는 addFirst()를 사용하면 된다</p>
                <p>덱의 뒤에 추가 할 경우에는 addLast()를 사용하면 된다</p>
                <p>빈 값을 추가하려고 할 경우 NullPointerException()를 반환한다</p>
                <p>이때 ArrayDeque은 원형 자료구조로 되어있다고 생각하면 된다</p>
                <p>head 혹은 tail에 값을 추가하고 head와 tail이 만나면 덱의 공간을 2배로 만들어준다</p>
                <p>덱의 공간이 너무 커져서 overflow 될 경우 IllegalStateException()을 반환한다</p>
                <p>이 과정에서 배열복사가 일어나게 되고 시간복잡도는 O(n) 이다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/c00f84adb5f8050b39267fbbeb81f55d"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="deque_poll">Poll</h3>
                <p>덱의 앞에서 빼올 경우에는 pollFirst()를 사용하면 된다</p>
                <p>덱의 뒤에서 빼올 경우에는 pollLast()를 사용하면 된다</p>
                <p>값이 비어있을 경우 null값을 반환한다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/c3c9397c20bf69570ab99add20c06210"
                    loadingClass="loading__screen"
                  />
                </div>
                <h2 id="priorityqueue">Priority Queue</h2>
                <div className="video"><iframe src="https://www.youtube.com/embed/AjFlp951nz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <p>우선순위 큐는 우선순위가 높은 순서로 나오는 순서로 되어있다</p>
                <p>힙구조로 저장되어있기 때문에 그대로 저장된 배열을 출력하면 순서가 섞여있다</p>
                <img src={process.env.PUBLIC_URL + '/img/DataStructure/queue-pq-toarray.png'} alt="queue-pq-toarray" />
                <p>poll()을 사용하여 출력하면 원소를 빼낼때마다 힙구조를 재조정하기 때문에 순서대로 나오게 된다</p>
                <img src={process.env.PUBLIC_URL + '/img/DataStructure/queue-pq-toarray2.png'} alt="queue-pq-toarray2" />
                <h3 id="priorityqueue_constructor">생성자</h3>
                <p>크기를 설정할 수 있으며 기본값으로 11을 갖는다</p>
                <p>comparator()을 사용하여 compare()함수를 오버라이딩 하여 우선순위를 정할 수 있다</p>
                <p>해당 클래스에 compareTo()가 구현되지 않은 상태에서 comparator()를 지정해주지 않으면 예외를 발생시킨다</p>
                <img src={process.env.PUBLIC_URL + '/img/DataStructure/queue-pq-exception.png'} alt="queue-pq-exception" />
                <p></p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/c81b76fd8dac22d4412b7026043023f0"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="priorityqueue_add">add</h3>
                <p>허용된 용량을 초과한다면 해당 우선순위큐의 크기를 1.5배로 만든다</p>
                <p>comparator을 정의해주지 않았을 경우에는 해당 객체의 compareTo()를 사용한다</p>
                <p>comparator을 정의했을 경우 우선순위큐의 compare()를 사용한다</p>
                <p>1. 우선순위큐 배열의 마지막에 값을 추가한다</p>
                <p>2. 새로운 노드를 부모와 비교해가면서 우선순위가 높을 때까지 교환한다</p>
                <p>이 과정에서 O(logN)의 시간복잡도를 갖는다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/694f99b9e54fdfeab04f549bff703e4d"
                    loadingClass="loading__screen"
                    />
                </div>
                <h3 id="priorityqueue_poll">poll</h3>
                <p>comparator을 정의해주지 않았을 경우에는 해당 객체의 compareTo()를 사용한다</p>
                <p>comparator을 정의했을 경우 우선순위큐의 compare()를 사용한다</p>
                <p>1. 우선순위큐 루트값을 제거한다</p>
                <p>2. 우선순위큐의 마지막 값을 루트위치로 옮긴다</p>
                <p>3. 자식과 비교해가면서 우선순위가 낮을 때까지 교환한다</p>
                <p>이 과정에서 O(logN)의 시간복잡도를 갖는다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/bc5cac2f394fcc39c771e26f951823e4"
                    loadingClass="loading__screen"
                    />
                </div>
                <h1 id="출처">출처</h1>
                <p><a href="https://beomseok95.tistory.com/157" target="_blank">Collection에대하여 -1</a></p>
                <p><a href="https://jinyoungchoi95.tistory.com/29" target="_blank">[JAVA] Collection Interface/ add()와 offer() 차이</a></p>
                <p><a href="https://tecoble.techcourse.co.kr/post/2021-05-10-stack-vs-deque/" target="_blank">Java 의 Stack 대신 Deque</a></p>
                <p><a href="https://cjh5414.github.io/priorityqueue/" target="_blank">Java 우선순위 큐(Priority Queue) 와 Comparable, Comparator</a></p>
                <p><a href="https://johngrib.github.io/wiki/heap-sort/" target="_blank">힙 정렬 (Heap Sort)</a></p>
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
export default Queue