import { Component, Fragment } from 'react';
import { Tocbot } from '../../Toc/Toc';
import ReactEmbedGist from 'react-embed-gist';

class Stack extends Component {
  render() {
    return (
      <>
        <Fragment>
          <main className="content">
            <div className="article-container container-lg">
              <article className="article-content js-toc-content">
                <h1 id="스택">스택</h1>
                <div className="video"><iframe width="1280" height="720" src="https://www.youtube.com/embed/DsZHDmth6Pc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <p>스택이란 나중에 추가된 데이터가 먼저 나오는 성질(LIFO)을 가진 자료구조이다</p>
                <p>재귀적 알고리즘을 수행할때 주로 이용된다</p>
                <h2 id="기능">기능</h2>
                <h3 id="Push">Push</h3>
                맨 뒤에 값을 추가하며 시간복잡도는 O(1) 이다.
                <h3 id="Pop">Pop</h3>
                맨 뒤에 값을 꺼내오며 시간복잡도는 O(1) 이다.
                <h3 id="Peek">Peek</h3>
                맨 뒤에 값을 확인하며 시간복잡도는 O(1) 이다.
                <h2 id="Vector">Vector</h2>
                <p>JAVA에서 Stack 클래스는 Vector클래스를 상속받기 때문에 잘 사용되지 않는다</p>
                <p>Vector클래스는 get()과 set()역할을 하는 함수에 <strong>synchronized</strong>가 붙어 있어 성능이 저하된다</p>
                <p>싱글스레드 환경에서는 <strong>ArrayDeque를</strong> 사용하는게 더욱 빠르다 (Thread-Safe 하지 않음)</p>
                <p>멀티스레드 환경에서는 <strong>Collections.synchronizedList()</strong>를 이용하여 Thread-Safe 하게 하도록 한다</p>
                <p>이러한 이유는 Stack, Vector 가 JDK 1.0부터 존재하였기에 잘못 설계 된 경우이다</p>
                <div className="gist">
                  <ReactEmbedGist gist="cbkpar/bb293c1d83c4004bbed06112b029aaf0"
                    loadingClass="loading__screen"
                  />
                </div>
                <p></p>
                <h1 id="출처">출처</h1>
                <p><a href="https://devlog-wjdrbs96.tistory.com/244" target="_blank">[Java] Stack 클래스는 무엇이고 문제점은 무엇일까?</a></p>
                <p><a href="https://aahc.tistory.com/8" target="_blank">자바 컬렉션 프레임워크 Vector와 Stack은 왜 안쓰는가?</a></p>
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
export default Stack