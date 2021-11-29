import { Component, Fragment } from 'react';
import { Tocbot } from '../../Toc/Toc';

class Basic extends Component {
  render() {
    return (
      <>
        <Fragment>
          <main className="content">
            <div className="article-container container-lg">
              <article className="article-content js-toc-content">
                <h1 id="자료구조">자료구조</h1>
                <h2 id="배열">배열</h2>
                <h2 id="스택">스택</h2>
                <h2 id="큐">큐</h2>
                <h2 id="연결리스트">연결 리스트</h2>
                <h2 id="해쉬테이블">해쉬 테이블</h2>
                <h2 id="그래프">그래프</h2>
                <h2 id="트리">트리</h2>
                <h1 id="출처">출처</h1>
                <p><a href="https://velog.io/@jha0402/Data-structure-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EA%BC%AD-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-7%EA%B0%80%EC%A7%80-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0" target="_blank">[Data structure] 개발자라면 꼭 알아야 할 7가지 자료구조</a></p>
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
export default Basic