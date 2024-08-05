import Head from "next/head";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flex 튜토리얼과 실습 문제</title>
        <meta name="description" content="Next.js로 만든 Flex 튜토리얼" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Flex 튜토리얼과 실습 문제</h1>

        <h2>기본 예제</h2>

        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Example5 />
        <Example6 />
        <Example7 />

        <h2>실습 문제</h2>

        <Problem1 />
        <Problem2 />
        <Problem3 />
        <Problem4 />
        <Problem5 />
        <Problem6 />
        <Problem7 />
      </main>
    </div>
  );
}

function Example1() {
  return (
    <div className={styles.example}>
      <h3>예제 1: 기본 Flex Container</h3>
      <p>display: flex를 사용하여 기본 Flex container를 만듭니다.</p>
      <div className={styles.example1}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
      </div>
      <p>
        코드: <code>display: flex;</code>
      </p>
    </div>
  );
}

function Example2() {
  return (
    <div className={styles.example}>
      <h3>예제 2: flex-direction 활용</h3>
      <p>
        flex-direction: row-reverse를 사용하여 아이템을 역순으로 배치합니다.
      </p>
      <div className={styles.example2}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
      </div>
      <p>
        코드: <code>display: flex; flex-direction: row-reverse;</code>
      </p>
    </div>
  );
}

function Example3() {
  return (
    <div className={styles.example}>
      <h3>예제 3: justify-content 사용</h3>
      <p>
        justify-content: space-between을 사용하여 아이템들을 균등하게
        분배합니다.
      </p>
      <div className={styles.example3}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
      </div>
      <p>
        코드: <code>display: flex; justify-content: space-between;</code>
      </p>
    </div>
  );
}

function Example4() {
  return (
    <div className={styles.example}>
      <h3>예제 4: align-items 적용</h3>
      <p>align-items: center를 사용하여 아이템들을 세로 중앙에 정렬합니다.</p>
      <div className={styles.example4}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
      </div>
      <p>
        코드: <code>display: flex; align-items: center; height: 150px;</code>
      </p>
    </div>
  );
}

function Example5() {
  return (
    <div className={styles.example}>
      <h3>예제 5: justify-content와 align-items 동시 사용</h3>
      <p>
        justify-content: center와 align-items: center를 함께 사용하여 아이템을
        컨테이너의 중앙에 배치합니다.
      </p>
      <div className={styles.example5}>
        <div className={styles.item}>Centered Item</div>
      </div>
      <p>
        코드:{" "}
        <code>
          display: flex; justify-content: center; align-items: center; height:
          200px;
        </code>
      </p>
    </div>
  );
}

function Example6() {
  return (
    <div className={styles.example}>
      <h3>예제 6: flex-wrap 설정</h3>
      <p>flex-wrap: wrap을 사용하여 아이템들이 여러 줄로 나뉘도록 합니다.</p>
      <div className={styles.example6}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
        <div className={styles.item}>Item 4</div>
        <div className={styles.item}>Item 5</div>
      </div>
      <p>
        코드: <code>display: flex; flex-wrap: wrap; width: 250px;</code>
      </p>
    </div>
  );
}

function Example7() {
  return (
    <div className={styles.example}>
      <h3>예제 7: 중첩된 Flex</h3>
      <p>
        외부 컨테이너와 내부 컨테이너 모두에 Flex를 적용하여 복잡한 레이아웃을
        만듭니다.
      </p>
      <div className={styles.example7}>
        <div className={styles.outerContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.item}>Item 1</div>
            <div className={styles.item}>Item 2</div>
          </div>
          <div className={styles.innerContainer}>
            <div className={styles.item}>Item 3</div>
            <div className={styles.item}>Item 4</div>
          </div>
          <div className={styles.innerContainer}>
            <div className={styles.item}>Item 5</div>
            <div className={styles.item}>Item 6</div>
          </div>
        </div>
      </div>
      <p>코드:</p>
      <pre>
        <code>{`
.outerContainer {
    display: flex;
    justify-content: space-between;
}
.innerContainer {
    display: flex;
    flex-direction: column;
    width: 30%;
}
      `}</code>
      </pre>
    </div>
  );
}

function Problem1() {
  return (
    <div className={styles.problem}>
      <h3>문제 1: 기본 Flex Container 만들기</h3>
      <p>지시사항:</p>
      <ol>
        <li>.problem1 선택자를 사용하여 CSS를 적용하세요.</li>
        <li>display 속성을 사용하여 Flex Container를 만드세요.</li>
        <li>결과: 아이템들이 가로로 나열되어야 합니다.</li>
      </ol>
      <div className={styles.problem1}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
      </div>
      <p>힌트: display: flex;를 사용하세요.</p>
    </div>
  );
}

function Problem2() {
  return (
    <div className={styles.problem}>
      <h3>문제 2: Flex 방향 변경하기</h3>
      <p>지시사항:</p>
      <ol>
        <li>.problem2 선택자를 사용하여 CSS를 적용하세요.</li>
        <li>
          Flex Container를 만들고, flex-direction 속성을 사용하여 아이템들을
          세로로 배치하세요.
        </li>
        <li>결과: 아이템들이 세로로 나열되어야 합니다.</li>
      </ol>
      <div className={styles.problem2}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
      </div>
      <p>힌트: flex-direction: column;을 사용하세요.</p>
    </div>
  );
}

function Problem3() {
  return (
    <div className={styles.problem}>
      <h3>문제 3: Flex 아이템 정렬하기 (가로)</h3>
      <p>지시사항:</p>
      <ol>
        <li>.problem3 선택자를 사용하여 CSS를 적용하세요.</li>
        <li>
          Flex Container를 만들고, justify-content 속성을 사용하여 아이템들을
          가운데 정렬하세요.
        </li>
        <li>결과: 아이템들이 컨테이너의 가로 중앙에 위치해야 합니다.</li>
      </ol>
      <div className={styles.problem3}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
      </div>
      <p>힌트: justify-content: center;를 사용하세요.</p>
    </div>
  );
}

function Problem4() {
  return (
    <div className={styles.problem}>
      <h3>문제 4: Flex 아이템 정렬하기 (세로)</h3>
      <p>지시사항:</p>
      <ol>
        <li>.problem4 선택자를 사용하여 CSS를 적용하세요.</li>
        <li>
          Flex Container를 만들고, align-items 속성을 사용하여 아이템들을 세로
          중앙에 정렬하세요.
        </li>
        <li>컨테이너의 높이를 200px로 설정하세요.</li>
        <li>결과: 아이템들이 컨테이너의 세로 중앙에 위치해야 합니다.</li>
      </ol>
      <div className={styles.problem4}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
      </div>
      <p>힌트: align-items: center;와 height: 200px;를 사용하세요.</p>
    </div>
  );
}

function Problem5() {
  return (
    <div className={styles.problem}>
      <h3>문제 5: Flex 아이템 배치 조정하기</h3>
      <p>지시사항:</p>
      <ol>
        <li>.problem5 선택자를 사용하여 CSS를 적용하세요.</li>
        <li>
          Flex Container를 만들고, justify-content와 align-items 속성을 사용하여
          아이템을 컨테이너의 우측 하단에 배치하세요.
        </li>
        <li>컨테이너의 높이를 200px로 설정하세요.</li>
        <li>결과: 아이템들이 컨테이너의 우측 하단에 위치해야 합니다.</li>
      </ol>
      <div className={styles.problem5}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
      </div>
      <p>
        힌트: justify-content: flex-end;와 align-items: flex-end;를 사용하세요.
      </p>
    </div>
  );
}

function Problem6() {
  return (
    <div className={styles.problem}>
      <h3>문제 6: Flex-wrap 사용하기</h3>
      <p>지시사항:</p>
      <ol>
        <li>.problem6 선택자를 사용하여 CSS를 적용하세요.</li>
        <li>
          Flex Container를 만들고, flex-wrap 속성을 사용하여 아이템들이 여러
          줄에 걸쳐 표시되도록 설정하세요.
        </li>
        <li>컨테이너의 너비를 300px로 제한하세요.</li>
        <li>
          결과: 아이템들이 컨테이너의 너비를 초과할 경우 다음 줄로 넘어가야
          합니다.
        </li>
      </ol>
      <div className={styles.problem6}>
        <div className={styles.item}>Item 1</div>
        <div className={styles.item}>Item 2</div>
        <div className={styles.item}>Item 3</div>
        <div className={styles.item}>Item 4</div>
        <div className={styles.item}>Item 5</div>
      </div>
      <p>힌트: flex-wrap: wrap;과 width: 300px;를 사용하세요.</p>
    </div>
  );
}

function Problem7() {
  return (
    <div className={styles.problem}>
      <h3>문제 7: Flex를 사용하여 네비게이션 바 구현하기</h3>
      <p>아래 이미지와 같은 네비게이션 바를 Flex만을 사용하여 구현하세요:</p>
      <img
        src="nav.png"
        alt="네비게이션 바 예시"
        className={styles.exampleImage}
      />
      <p>지시사항:</p>
      <ol>
        <li>제공된 HTML 구조를 사용하세요. 클래스 이름은 변경하지 마세요.</li>
        <li>스타일은 오직 Flex 관련 속성만을 사용하여 구현하세요.</li>
        <li>네비게이션 바의 높이는 60px로 설정하세요.</li>
        <li>로고는 왼쪽에, 메뉴 항목들은 오른쪽에 배치하세요.</li>
        <li>로고와 메뉴 항목들이 세로 중앙에 위치하도록 정렬하세요.</li>
        <li>메뉴 항목들 사이에 적절한 간격을 두세요.</li>
      </ol>
      <div className={styles.codeSection}>
        <h4>HTML 구조:</h4>
        <pre>
          <code>{`
  <nav class="navbar">
    <div class="logo">로고</div>
    <ul class="menu">
      <li><a href="#">홈</a></li>
      <li><a href="#">서비스</a></li>
      <li><a href="#">연락처</a></li>
    </ul>
  </nav>
          `}</code>
        </pre>
      </div>
      <div className={styles.codeSection}>
        <h4>CSS 가이드라인:</h4>
        <pre>
          <code>{`
  .navbar {
    /* 네비게이션 바를 Flex 컨테이너로 만들고, 내부 요소들을 정렬하세요 */
    height: 60px;
    background-color: #3b82f6;  /* 파란색 배경 */
    padding: 0 1rem;  /* 좌우 패딩 */
  }
  
  .logo {
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
  }
  
  .menu {
    /* 메뉴를 Flex 컨테이너로 만들고, 항목들을 정렬하세요 */
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .menu li {
    margin: 0 0.5rem;  /* 좌우 마진으로 간격 조정 */
  }
  
  .menu a {
    color: white;
    text-decoration: none;
  }
          `}</code>
        </pre>
      </div>
      <p>
        힌트: display: flex, justify-content, align-items 속성을 활용하세요.
        메뉴 항목에도 Flex를 적용해야 합니다.
      </p>
      <div className={styles.problem7}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>로고</div>
          <ul className={styles.menu}>
            <li>
              <a href="#">홈</a>
            </li>
            <li>
              <a href="#">서비스</a>
            </li>
            <li>
              <a href="#">연락처</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
