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
                <p>트랜잭션끼리 얼마나 서로 격리되어 있는지를 나타낸다</p>
                <div className="video"><iframe src="https://www.youtube.com/embed/poyjLx-LOEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <h2 id="동시성과무결성">동시성과 무결성</h2>
                <p>격리 수준은 동시성과 무결성에 연관되어 있다.</p>
                <p>동시성을 높이면 무결성에 문제가 생기게 되고</p>
                <p>무결성을 유지하면 동시성에 문제가 생기게 된다</p>
                <h2 id="ReadUncommitted">Read Uncommitted</h2>
                <p>0 레벨 수준의 격리</p>
                <p>SELECT 문이 수행되는 동안 <strong>Shared Lock</strong>이 걸리지 않음</p>
                <p><strong>Dirty Read</strong>, Non-Repeatable Read, Phantom Read 발생</p>
                <h2 id="ReadCommitted">Read Committed</h2>
                <p>1 레벨 수준의 격리</p>
                <p>트랜잭션의 변경내용이 Commit이 되어야 다른 트랜잭션에서 조회된다</p>
                <p>SELECT 문이 수행되는 동안 <strong>Shared Lock</strong>이 걸린다.</p>
                <p>Oracle에서 기본적으로 사용되는 Isolation Level 이다.</p>
                <p><strong>Non-Repeatable Read</strong>, Phantom Read 발생</p>
                <h2 id="RepeatableRead">Repeatable Read</h2>
                <p>2 레벨 수준의 격리</p>
                <p>해당 트랜잭션보다 이전 트랜잭션의 커밋된 내용만 조회 가능하다</p>
                <p>Mysql에서 기본적으로 사용되는 Isolation Level 이다.</p>
                <p><strong>Phantom Read</strong> 발생</p>
                <h2 id="Serializable">Serializable</h2>
                <p>3 레벨 수준의 격리</p>
                <p>가장 엄격한 수준의 격리이다</p>
                <p>가장 쉽게 데이터를 보호할 수는 있지만 쉽게 <strong>Deadlock</strong> 상태에 걸릴 수 있어 주의해야 한다.</p>
                <h2 id="데이터부정합">데이터 부정합</h2>
                <h3 id="DirtyRead">Dirty Read</h3>
                <p>Commit 되지 않은 트랜잭션의 변경사항을 다른 트랜잭션에서 보게 된다</p>
                <p>다음과 같은 문제가 발생한다</p>
                <p>트랜잭션(T1)에서 1번 데이터 'A'를 'B'로 수정 한 뒤</p>
                <p>트랜잭션(T2)에서 1번 데이터를 불러 온다면</p>
                <p>트랜잭션(T1)이 아직 Commit하지 않은 상태이지만</p>
                <p>트랜잭션(T2)는 1번 데이터의 값으로 'B'를 가져오게 된다</p>
                <h3 id="Non-RepeatableRead">Non-Repeatable Read</h3>
                <p>한 트랜잭션에서 동일한 쿼리를 실행하여도 다른 결과가 나오는 현상</p>
                <p>트랜잭션 내 동일한 쿼리문 사이에 해당 데이터의 값이 수정 또는 삭제 되었을 때 나타난다</p>
                <p>다음과 같은 문제가 발생한다</p>
                <p>트랜잭션(T1)에서 1번 데이터의 값 'A'를 불러온다</p>
                <p>트랜잭션(T2)에서 1번 데이터의 값 'A'를 'B'로 수정 후 Commit한다</p>
                <p>트랜잭션(T1)에서 다시 1번 데이터의 값을 불러온다</p>
                <p>결과적으로 트랜잭션(T1)에서 값 'A'와 'B'가 조회된다.</p>
                <h3 id="PhantomRead">Phantom Read</h3>
                <p>한 트랜잭션 내에서 동일한 쿼리문을 실행하였을 때</p>
                <p>첫 번째 쿼리문에서 없던 레코드가 두 번째 쿼리문에서 조회되는 현상</p>
                <p>Insert문에 대해서만 발생한다</p>
                <p>다음과 같은 문제가 발생한다</p>
                <p>레코드가 비어있는 테이블이 있다고 할 때</p>
                <p>트랜잭션(T1)에서 모든 데이터를 조회한다 - (0건 조회)</p>
                <p>트랜잭션(T2)에서 1번 데이터를 <strong>Insert</strong>한다</p>
                <p>트랜잭션(T1)에서 모든 데이터를 조회한다 - (0건 조회)</p>
                <p>트랜잭션(T2)에서 1번 데이터를 <strong>Update</strong>한다</p>
                <p>트랜잭션(T1)에서 모든 데이터를 조회한다 - (1건 조회)</p>
                <p><strong>Update문의 영향을 받은 후 부터 출력 된다</strong></p>
                <h3 id="격리수준별데이터부정합">격리 수준별 데이터 부정합</h3>
                <img src={process.env.PUBLIC_URL + '/img/Database/isolation-level.png'} alt="Isolation" />
                <h1 id="출처">출처</h1>
                <p><a href="https://doooyeon.github.io/2018/09/29/transaction-isolation-level.html" target="_blank">트랜잭션 격리 수준</a></p>
                <p><a href="https://joont92.github.io/db/%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98-%EA%B2%A9%EB%A6%AC-%EC%88%98%EC%A4%80-isolation-level/" target="_blank">[db] 트랜잭션 격리 수준(isolation level)</a></p>
                <p><a href="https://dar0m.tistory.com/225" target="_blank">트랜잭션 격리 수준(Transaction Isolation level)</a></p>
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