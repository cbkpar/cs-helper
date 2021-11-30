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
                <p>가장 기본적인 자료구조</p>
                <p>논리적 저장 순서와 물리적 저장 순서가 일치한다</p>
                <p>인덱스로 해당원소를 접근하기에 O(1)로 접근 가능하다</p>
                <p>즉 random access가 가능하다</p>
                <p>삭제, 삽입 할 경우 원소를 shift 해주어야 하기 때문에 O(n)의 시간복잡도를 갖는다</p>
                <h2 id="연결리스트">연결 리스트</h2>
                <p>각 노드에 이전노드 주소와 다음노드 주소를 저장한다</p>
                <p>삭제와 삽입을 O(1) 만에 해결 할 수 있다</p>
                <p>하지만 해당 노드까지의 검색하는 과정에서 O(n) 이 걸리게 된다</p>
                <p>즉 삽입, 삭제, 조회에 대해서 모두 O(n)의 복잡도를 갖게 된다</p>
                <h2 id="스택">스택</h2>
                <p>LIFO(Last In First Out)</p>
                <p>나중에 들어간 원소가 먼저 나오는 선형 자료구조</p>
                <h2 id="큐">큐</h2>
                <p>FIFO(First In First Out), FCFS(First Come First Serve)</p>
                <p>먼저 들어간 원소가 먼저 나오는 선형 자료구조</p>
                <h2 id="해쉬테이블">해쉬 테이블</h2>
                <p>해쉬는 배열을 사용하기 때문에 빠른 검색 속도를 갖는다</p>
                <p>데이터 고유의 인덱스로 접근하기 때문에 O(1)의 복잡도를 갖는다</p>
                <p>충돌(Collision)이 무한해 질수록 O(n)에 가까운 복잡도를 갖게된다</p>
                <p>인덱스로 저장되는 key값이 불규칙하다</p>
                <p>해쉬 함수를 통해 해쉬 코드를 생성하여 이것을 key 값으로 사용한다</p>
                <p>해쉬 함수를 어설프게 짜게 될 경우 다른 데이터가 동일한 key 값을 가질 수 있다(Collision)</p>
                <h3 id="OpenAdress">개방주소법(Open Address)</h3>
                <p>해시 충돌이 발생할 경우 다른 해시 버킷에 해당 자료를 삽입한다</p>
                <p>해시 버킷을 채운 밀도가 높아질수록 Worst Case 발생 빈도가 높아진다</p>
                <p>1. Linear Probing : 순차적으로 탐색하며 비어있는 버킷을 찾을 때까지 진행된다</p>
                <p>2. Quadratic probing : 2 차 함수를 이용해 탐색할 위치를 찾는다</p>
                <p>3. Double hashing probing : 하나의 해쉬 함수에서 충돌이 발생하면 2 차 해쉬 함수를 이용해 새로운 주소를 할당한다.</p>
                <h3 id="SeparateChaining">분리연결법(Separate Chaining)</h3>
                <p>일반적으로 개방주소법보다 빠르다</p>
                <p>JAVA 8 이후 에서는 해당 방식을 복합적으로 사용하여 HashMap을 구현한다</p>
                <p>1. Linked List : 버킷을 연결리스트로 만들어 Collision 발생시 bucket의 list에 추가한다</p>
                <p>삽입, 삭제가 간단하지만 작은 데이터의 오버헤드가 부담된다.</p>
                <p>JAVA 7 에서는 해당 방식을 사용하여 HashMap을 구현한다</p>
                <p>2. Read-Black Tree : 연결리스트 대신 트리를 사용한다.</p>
                <p>key-value 쌍의 개수가 적을 경우 연결리스트를 사용한다(트리는 기본적으로 메로리 사용량이 크다)</p>
                <h3 id="개방주소법vs분리연결법">개방주소법 vs 분리연결법</h3>
                <p>두 방식 모두 Worst Case에서 O(N)의 복잡도를 갖는다</p>
                <p>개방주소법 방식은 연속된 공간에 데이터를 저장하기 때문에 캐시 효율이 높다</p>
                <p>개방주소법은 버킷을 계속 사용한다 따라서 분리연결법 방식은 테이블의 확장을 늦출 수 있다</p>
                <h3 id="보조해시함수">보조 해시 함수</h3>
                <p>key의 해시 값을 변형하여 충돌 가능성을 줄인다</p>
                <p>분리연결법 방식에서 사용되며 Worst Case 경우를 줄일 수 있다</p>
                <h3 id="해시버킷동적확장">해시 버킷 동적 확장(Resize)</h3>
                <p>해시 버킷이 작다면 메모리를 절약할 수 있지만 충돌이 일어 날 수 있다</p>
                <p>따라서 해시 버킷의 개수가 75% 이상이 될경우 해당 버킷의 크기를 2배로 늘린다</p>
                <h2 id="그래프">그래프</h2>
                <p>정점과 간선의 집합</p>
                <p>정방 행렬 또는 연결리스트를 이용하여 구현된다</p>
                <h3 id="방향그래프">방향 그래프</h3>
                <p>간선에 방향성이 포함되어 있는 그래프를 나타낸다</p>
                <h3 id="무방향그래프">무방향 그래프</h3>
                <p>간선에 방향성이 없는 그래프를 나타낸다(양방향)</p>
                <h2 id="트리">트리</h2>
                <p>노드로 구성된 계층적 자료구조</p>
                <p>트리 또한 그래프이며, 사이클이 허용되지 않은 그래프를 나타낸다</p>
                <p>최상위 노드(root)에 child 노드를 연결하고, child에 child를 추가하는 방식으로 구현된다</p>
                <h1 id="출처">출처</h1>
                <p><a href="https://velog.io/@jha0402/Data-structure-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EA%BC%AD-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-7%EA%B0%80%EC%A7%80-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0" target="_blank">[Data structure] 개발자라면 꼭 알아야 할 7가지 자료구조</a></p>
                <p><a href="https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/DataStructure" target="_blank">Part 1-2 DataStructure</a></p>
                <p><a href="http://d2.naver.com/helloworld/831311" target="_blank">Java HashMap은 어떻게 동작하는가?</a></p>
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