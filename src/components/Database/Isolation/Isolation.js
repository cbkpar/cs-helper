import { Component, Fragment } from 'react';
import { Tocbot } from '../../Toc/Toc';

class Isolation extends Component {
  render() {
    return (
      <>
        <Fragment>
          <main className="content">
            <div className="article-container container-lg">
              <article className="article-content js-toc-content">
                <h1 id="격리수준">격리 수준</h1>
                <h2 id="ReadUncommitted">Read Uncommitted</h2>
                <p>0 레벨</p>
                <h2 id="ReadCommitted">Read Committed</h2>
                <p>1 레벨</p>
                <h2 id="RepeatableRead">Repeatable Read</h2>
                <p>2 레벨</p>
                <h2 id="Serializable">Serializable</h2>
                <p>3 레벨</p>
                <h2 id="데이터부정합">데이터 부정합</h2>
                <h3 id="DirtyRead">Dirty Read</h3>
                <h3 id="Non-RepeatableRead">Non-Repeatable Read</h3>
                <h3 id="PhantomRead">Phantom Read</h3>
                <h3 id="격리수준별데이터부정합">격리 수준별 데이터 부정합</h3>
                <img src={process.env.PUBLIC_URL + '/img/Database/isolation-level.png'} alt="Isolation" />
                <h1 id="출처">출처</h1>
                <p><a href="https://doooyeon.github.io/2018/09/29/transaction-isolation-level.html" target="_blank">트랜잭션 격리 수준</a></p>
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
export default Isolation