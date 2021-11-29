import { Component, Fragment } from 'react';
import { Tocbot } from '../../Toc/Toc';

class Lock extends Component {
  render() {
    return (
      <>
        <Fragment>
          <main className="content">
            <div className="article-container container-lg">
              <article className="article-content js-toc-content">
                <h1 id="Transaction">Transaction</h1>
                <p>트랜잭션(Transaction)은 데이터베이스의 상태를 변환시키는 하나의 기능을 수행하는 단위</p>
                <p>쉽게 예를 들어 하나의 기능을 위해 여러개의 SQL질의문으로 이루어진 것</p>
                <h2 id="ACID">ACID</h2>
                <h3 id="Atomicity">Atomicity</h3>
                <p>Atomicity(원자성) : 트랜잭션이 부분적으로 실행되다가 중단되지 않는것을 보장한다</p>
                <p>All or nothing</p>
                <p>ex) 돈을 보내는 것을 성공하고 돈이 빠져나가는 것을 실패하면 안된다</p>
                <h3 id="Consistency">Consistency</h3>
                <p>Consistency(일관성) : 트랜잭션이 완료되면 항상 일관성 있는 데이터베이스 상태로 유지한다</p>
                <p>즉, 무결성 제약을 위반할 경우 트랜잭션이 중단된다</p>
                <p>무결성이란 데이터베이스에 저장된 값들의 결함이 없는 성질을 나타낸다</p>
                <p>ex) 돈을 보냈을 때 계좌 금액이 음수가 될 경우 해당 트랜잭션을 중단한다</p>
                <h3 id="Isolation">Isolation</h3>
                <p>Isolation(독립성) : 트랜잭션 수행 시 다른 트랜잭션의 연산 작업이 끼어들지 못하도록 보장한다</p>
                <p>성능관련 이유로 인해 이 특성은 가장 유연성 있는 제약 조건이다</p>
                <p>ex) 돈을 보내는 것을 성공하고 아직 빠져나가지 않은 상태에서 계좌를 조회할 수 없다</p>
                <h3 id="Durability">Durability</h3>
                <p>Durability(영구성) : 성공된 트랜잭션은 영원히 반영되어야 한다</p>
                <p>모든 트랜잭션은 로그로 남겨지며 오류 발생시 이전 상태로 되돌릴 수 있다</p>
                <h2 id="ACID원칙">ACID 원칙과 Isolation Level</h2>
                <p>ACID 원칙을 엄격하게 지킬수록 동시성이 떨어지기 때문에 종종 지켜지지 않는다</p>
                <p>Isolation Level 마다 각자 다른 Lock을 걸어준다</p>
                <p>Isolation Level이 낮을 수록 문제가 발생할 확률은 높아지지만 동시성을 높일 수 있다</p>
                <h2 id="InnoDB의Lock">InnoDB의 Lock</h2>
                <div className="video"><iframe src="https://www.youtube.com/embed/onBpJRDSZGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <h3 id="SharedLock">Shared Lock (S)</h3>
                <p>Row-level Lock</p>
                <p>SELECT를 위해 사용</p>
                <p>Shared Lock이 걸려있을 경우 다른 Shared Lock은 획득가능하지만 Exclusive Lock은 획득 불가능하다</p>
                <p>S → S (O), S → X (X)</p>
                <h3 id="ExclusiveLock">Exclusive Lock (X)</h3>
                <p>Row-level Lock</p>
                <p>UPDATE, DELETE를 위해 사용</p>
                <p>Shared Lock 보다 좀 더 엄격한 Lock</p>
                <p>Exclusive Lock이 걸려있을 경우 Shared Lock, Exclusive Lock 모두 획득 불가능하다</p>
                <p>X → S (X), X → X (X)</p>
                <h3 id="IntentionLock">Intention Lock</h3>
                <p>Table Lock</p>
                <br />
                <p><strong>SELECT ... LOCK IN SHARE MODE</strong></p>
                <p>먼저 Intention Shared Lock (IS) 이 걸리고 row-level에 S Lock이 걸린다</p>
                <br />
                <p><strong>SELECT ... FOR UPDATE</strong></p>
                <p>먼저 Intention Exclusive Lock (IX) 이 걸리고 row-level에 X Lock이 걸린다</p>
                <br />
                <p>IS Lock과 IX Lock은 서로 Block 하지 않지만 row-level에 걸린 Lock에서 제어한다</p>
                <p>LOCK TABLES, ALTER TABLE, DROP TABLE을 수행할 경우 Table-level Lock이 걸린다</p>
                <p>따라서 IS, IX Lock을 필요로 하는 트랜잭션은 대기 상태로 남는다</p>
                <p>반대로 IS, IX Lock이 걸려 있을 경우 해당 트랜잭션이 대기 상태로 남는다</p>
                <h3 id="Lock관계">IS, IX, S, X Lock의 관계</h3>
                <img src={process.env.PUBLIC_URL + '/img/Database/lockcompare.png'} alt="lockcompare" />
                <h3 id="RecordLock">Record Lock</h3>
                <p>DB의 index record에 걸리는 Lock</p>
                <p><strong>Transaction A) SELECT grade FROM student grade = 1 FOR UPDATE;</strong></p>
                <p>해당 index record에 X Lock이 걸리게 된다.</p>
                <p><strong>Transcation B) DELETE FROM student grade = 1;</strong></p>
                <p>트랜잭션(B)은 트랜잭션(A)가 Commit되거나 Rollback되기 전까지 수행할 수 없다</p>
                <h3 id="GapLock">Gap Lock</h3>
                <p>gap이란 DB에 실제로 record가 없는 부분이다</p>
                <p>즉, 비어있는 레코드에 Lock이 걸리는 것이다</p>
                <p>만약 student 테이블에 id가 5, 8인 레코드만 있는 상태에서</p>
                <p><strong>Transaction A) SELECT grade FROM student WHERE id BETWEEN 3 AND 10 FOR UPDATE;</strong></p>
                <p>해당 트랜잭션을 수행할 경우 3 &lt;= id &lt;= 4, 6 &lt;= id &lt;= 7, 9 &lt;= id &lt;= 10</p>
                <p>위에 해당하는 곳에 Lock 이 걸리게 된다</p>
                <p>따라서 id가 1부터 10사이의 값을 가지는 레코드를 추가하려할 경우</p>
                <p>Transaction A가 Commit되거나 Rollback될 때까지 대기한다</p>
                <h3 id="NextkeyLock">Next-key Lock</h3>
                <p>범위를 지정한 쿼리를 수행할 경우 Record Lock과 Gap Lock이 복합적으로 사용된다</p>
                <img src={process.env.PUBLIC_URL + '/img/Database/lock-next-key.png'} alt="next-key-lock" />
                <h3 id="AUTOINCLock">AUTO-INC Lock</h3>
                <p>여러 트랜잭션이 동시에 수행될 때, AUTO_INCREMENT 컬럼을 일관성 있게 만들기 위해 필요한 Lock</p>
                <h2 id="Deadlock">데드락(Deadlock)</h2>
                <p>두개 이상의 트랜잭션이 동시에 진행될때 서로 필요한 락을 소유한 상태로 더이상 진행하지 못하는 상황</p>
                <p>트랜잭션을 지원하는 데이터베이스에서는 자주 발생하므로 주의해야 한다</p>
                <p>일반적인 DBMS에서는 데드락을 탐지해 자동으로 해소시켜준다</p>
                <p>실제 데드락 상황이 아니어도 일정 시간이 초과하면 데드락으로 간주된다</p>
                <p>이러한 과정에서 해당 트랜잭션이 취소 될 수 있으므로 재수행 시켜주어야 한다</p>
                <p></p>
                <h3 id="deadlockexample">현실적인 Deadlock 예시</h3>
                <img src={process.env.PUBLIC_URL + '/img/Database/lock-deadlock-funny.png'} alt="deadlockfunny" />
                <h3 id="reducedeadlock">Deadlock을 줄일 수 있는 방법</h3>
                <p>트랜잭션을 최대한 간결하게 만든다</p>
                <p>인덱스를 잘 구성하여 레코드 스캔 횟수를 줄여 락이 걸리는 횟수를 줄인다</p>
                <p>트랜잭션 내 여러 데이터 수정시에 Lock의 순서를 순차적으로 만든다</p>
                <p>ex) A, B, C 테이블 수정시 A → B → C 순으로 수정하면 데드락 위험을 줄일 수 있다</p>
                <h3 id="deadlockstatus">데드락 상태 확인 명령어</h3>
                

                <h1 id="출처">출처</h1>
                <p><a href="https://suhwan.dev/2019/06/09/transaction-isolation-level-and-lock/" target="_blank">Lock으로 이해하는 Transaction의 Isolation Level</a></p>
                <p><a href="https://www.letmecompile.com/mysql-innodb-lock-deadlock/" target="_blank">MySQL InnoDB lock, deadlock 이해하기</a></p>
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
export default Lock