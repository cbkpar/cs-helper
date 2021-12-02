import { Component, Fragment } from 'react';
import { Tocbot } from '../../Toc/Toc';
import ReactEmbedGist from 'react-embed-gist';

class Map extends Component {
  render() {
    return (
      <>
        <Fragment>
          <main className="content">
            <div className="article-container container-lg">
              <article className="article-content js-toc-content">
                <h1 id="맵">맵</h1>
                <div className="video"><iframe src="https://www.youtube.com/embed/7qV5nJ39Lqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <p>키와 값으로 이루어진 자료구조</p>
                <p><strong>키는 중복될 수 없지만 값은 중복될 수 있다</strong></p>
                <h2 id="MapInterface">Map Interface</h2>
                <p></p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/ebe1dbaac3ebb329c0ae92812940efb2"
                    loadingClass="loading__screen"
                  />
                </div>
                <h2 id="HashMap">HashMap</h2>
                <p>hash값에 의해 키순서가 정해지게 된다</p>
                <p>따라서 출력에 순서가 정해지지 않는다</p>
                <img src={process.env.PUBLIC_URL + '/img/DataStructure/map-hashmap-order.png'} alt="hashmap-order" />
                <p>Object의 hashCode()로 hash값이 정해지게 된다</p>
                <p>이때 hashCode()는 native로서 C 혹은 C++로 작성된 것이므로 JNI를 통해 사용한다</p>
                <h3 id="HashMap_constructor">생성자</h3>
                <p>초기용량과 load factor 값을 초기에 설정할 수 있다</p>
                <p>load factor 값은 저장공간을 미리 확보하는 것이다 (기본값 0.75)</p>
                <p>load factor * 100(%) 만큼 공간이 채워졌을때 공간의 크기를 2배로 늘리게 된다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/79cc8bf8fddaa8005b8198e5ca6e6a4c"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="HashMap_put">put</h3>
                <p>JAVA에서는 분리연결법을 사용하여 저장하며 LinkedList를 이용한다</p>
                <p>JAVA 8이후에는 테이블의 크기가 특정크기 보다 커질경우 Red-Black Tree를 이용하여 저장한다</p>
                <p>Red-Black Tree를 사용함으로서 메모리는 더 차지 하지만 기존 탐색 O(n)에서 O(logn)으로 단축할 수 있다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/9e4317569743d51702694a6e6096759d"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="HashMap_remove">remove</h3>
                <p>해당 key값과 일치하는 값이 존재할 경우 해당값을 삭제하고 반환한다</p>
                <p>그렇지 않다면 null값을 반환한다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/b2a496cf51bd95532f35fef8c45f9e57"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="HashMap_get">get</h3>
                <p>해당 hash값에 대한 테이블이 LinkedList 형태인지 Tree형태인지 확인 후에</p>
                <p>LinkedList의 경우 연결된 노드를 탐색하며 key값과 일치할경우 해당 값 반환 O(N)</p>
                <p>Tree의 경우 연결된 노드를 탐색하며 key값과 일치할경우 해당 값 반환 O(logN)</p>
                <p>존재하지 않다면 null값을 반환한다</p>
                <p>모든 원소에 대해 collision이 일어날 경우 Worst-case지만 일반적으로 O(1)이다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/03c5e3b360353c4dae42235b617b7891"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="HashMap_containsKey">containsKey</h3>
                <p>get과 같은 getNode()를 통해 진행되며 해당 리턴값이 null인지 여부를 확인한다</p>
                <p>일반적으로 O(1)의 시간복잡도를 갖는다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/e15ca3fdd6e97f3f5918432597b2761b"
                    loadingClass="loading__screen"
                  />
                </div>
                <h3 id="HashMap_containsValue">containsValue</h3>
                <p>containsKey와 다르게 <strong>모든 원소를 조회</strong>하며 확인한다</p>
                <p>따라서 O(N)의 시간 복잡도를 갖는다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/68e536fb7a219d355abd553ed0fd7361"
                    loadingClass="loading__screen"
                  />
                </div>
                <h2 id="LinkedHashMap">LinkedHashMap</h2>
                <p>HashMap 클래스를 상속받아 만들기 때문에 HashMap의 기능을 사용할 수 있다</p>
                <p>HashMap과 다르게 입력받은 순서로 데이터를 저장한다</p>
                <p>순서를 위해 Doubly Linked List를 사용하기 때문에 메모리 사용량이 더 크다</p>
                <img src={process.env.PUBLIC_URL + '/img/DataStructure/map-linkedhashmap-order.png'} alt="linkedhashmap-order" />
                <h2 id="TreeMap">TreeMap</h2>
                <h1 id="출처">출처</h1>
                <p><a href="https://kutar37.tistory.com/entry/%EC%9E%90%EB%B0%94-HashMap-LinkedHashMap-TreeMap" target="_blank">자바 HashMap, LinkedHashMap, TreeMap</a></p>
                <p><a href="https://staticclass.tistory.com/104" target="_blank">[자바] HashSet - 생성자, 메소드</a></p>
                <p><a href="https://sabarada.tistory.com/57" target="_blank">HashMap이란</a></p>
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
export default Map