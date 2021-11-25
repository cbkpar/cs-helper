import { Component, Fragment } from 'react';
import { Tocbot } from '../../Toc/Toc';

class Summary extends Component {
  render() {
    return (
      <>
        <Fragment>
          <main className="content">
            <div className="article-container container-lg">
              <article className="article-content js-toc-content">
                <h1 id="알고리즘">알고리즘</h1>
                <h2 id="정의">정의</h2>
                <p>
                  문제를 해결하기 위한 여러 동작들의 모임이다. 유한성을 가지며, 언젠가는 끝나야 하는 속성을 가지고 있다. 수학과 컴퓨터 과학에서 알고리즘이란 작동이 일어나게 하는 내재하는 단계적 집합이다. 알고리즘은 연산, 데이터 진행 또는 자동화된 추론을 수행한다.
                </p>
                <h2 id="특징">특징</h2>
                <h3 id="입력">입력</h3>
                <p>
                  입력되는 데이터는 0개 이상이어야 한다.
                </p>
                <h3 id="입력">출력</h3>
                <p>
                  출력되는 데이터는 2개 이상이어야 한다.
                </p>
                <h3 id="명확성">명확성</h3>
                <p>
                  알고리즘의 각 단계는 명확해야 한다.
                </p>
                <h3 id="유한성">유한성</h3>
                <p>
                  알고리즘은 유한한 횟수후에 종료되어야 한다.
                </p>
                <h3 id="효율성">효율성</h3>
                <p>
                  유한한 시간안에 정확하게 수행되어야 한다.
                </p>
                <h2 id="알고리즘 성능">알고리즘 성능</h2>
                <div className="video"><iframe src="https://www.youtube.com/embed/4iqlPfhW17g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <h3 id="시간 복잡도">시간 복잡도</h3>
                <p>시간 복잡도(Time Complexity)는 해당 알고리즘을 수행하는데 필요한 연산의 횟수를 나타낸다.</p>
                <p>연산의 횟수는 데이터의 수(n)에 따라 달라지며 <strong>T(n)</strong>으로 나타낸다.</p>
                <h3 id="공간 복잡도">공간 복잡도</h3>
                <p>공간 복잡도(Space Complexity)는 프로그램을 실행시킨 후 완료까지 필요한 자원 공간의 크기를 나타낸다. </p>
                <p>총 공간 [S(P)] = 고정 공간(c) + 가변 공간 S(n) </p>
                <p>일반적으로 공간 복잡도와 시간 복잡도는 반비례 관계이다(trade-off)</p>
                <p>일반적으로 공간보다 시간적인 부분이 중요하기 때문에 알고리즘에 고려되지 않는 편이다.</p>
                <h2 id="점근적 표기법">점근적 표기법</h2>
                <h3 id="Big-O">Big-O(상한 점근)</h3>
                <p><strong>최악의 경우</strong>에서의 복잡도를 나타낸다.</p>
                <p>알고리즘의 성능을 나타낼 때 가장 많이 사용 된다.</p>
                <h3 id="Big-Ω">Big-Ω(하한 점근)</h3>
                <p><strong>최선의 경우</strong>에서의 복잡도를 나타낸다.</p>
                <h3 id="Big-θ">Big-θ(평균 점근)</h3>
                <p><strong>평균적인 경우</strong>에서의 복잡도를 나타낸다.</p>
                <h2 id="시간복잡도">Big-O 시간 복잡도</h2>
                <h3 id="시간복잡도비교">시간 복잡도 비교</h3>
                <img src={process.env.PUBLIC_URL + '/img/Algorithm/bigO.png'} alt="Big-O Complexity" />
                <p>O(1) &lt; O(logn) &lt; O(n) &lt; O(nlogn) &lt; O(n^2) &lt; O(n^3) &lt; O(2^n) &lt; O(n!)</p>
                <div className="video"><iframe src="https://www.youtube.com/embed/6Iq5iMCVsXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <h3 id="O(1)">O(1)</h3>
                <p>데이터의 개수와 상관 없이 1번의 연산이 필요한 알고리즘</p>
                <p>ex) 리스트의 크기 출력</p>
                <h3 id="O(n)">O(n)</h3>
                <p>데이터의 개수에 비례한 만큼 연산이 필요한 알고리즘</p>
                <p>ex) 리스트의 모든 수의 합 출력</p>
                <h3 id="O(nlogn)">O(nlogn)</h3>
                <p>기본적으로 한번의 연산을 통해 2가지로 가지치기 할 수 있는 알고리즘</p>
                <p>기본적으로 사용되는 퀵, 머지, 힙 정렬의 평균 시간복잡도에 해당된다.</p>
                <p>퀵 정렬의 경우 최악의 경우 O(n^2)</p>
                <p>ex) 최장 증가 부분 수열(LIS)</p>
                <h3 id="O(n^2)">O(n^2)</h3>
                <p>데이터의 개수에 제곱한 만큼 연산이 필요한 알고리즘</p>
                <p>ex) 구구단, 버블 정렬, 선택 정렬, 삽입 정렬</p>
                <h3 id="O(n^3)">O(n^3)</h3>
                <p>데이터의 개수에 세제곱한 만큼 연산이 필요한 알고리즘</p>
                <p>ex) 플로이드-와샬, 벨만포드 알고리즘</p>
                <h1 id="출처">출처</h1>
                <p><a href="https://opentutorials.org/course/2471/13912" target="_blank">프로그래밍 입문 - 알고리즘의 정의</a></p>
                <p><a href="https://madplay.github.io/post/time-complexity-space-complexity" target="_blank">시간복잡도와 공간복잡도</a></p>
                <p><a href="https://blog.naver.com/zzang9ha/221763516860" target="_blank">빅오(Big-O)표기법, 시간복잡도</a></p>
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
export default Summary