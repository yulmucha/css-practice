import Head from "next/head";
import styles from "./page.module.css";

export default function CSSGridTutorial() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSS Grid 튜토리얼과 실습 문제</title>
        <meta name="description" content="Next.js로 만든 CSS Grid 튜토리얼" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>CSS Grid 튜토리얼과 실습 문제</h1>

        <h2>기본 예제</h2>

        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />

        <h2>실습 문제</h2>

        <Problem1 />
        <Problem2 />
        <Problem3 />
        <Problem4 />
      </main>
    </div>
  );
}

export function Example1() {
  return (
    <div className={styles.example}>
      <h3>예제 1: 기본 그리드 만들기</h3>
      <p>CSS Grid의 가장 기본적인 사용법을 알아봅시다.</p>
      <div className={styles.example1}>
        <div className={styles.item}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
        <div className={styles.item}>4</div>
      </div>
      <div>
        사용된 CSS:
        <pre className={styles.codeBlock}>
          {`
  .example1 {
    display: grid;
    grid-template-columns: auto auto;
  }
            `}
        </pre>
      </div>
      <p>
        설명: display: grid로 그리드를 생성하고, grid-template-columns: auto
        auto로 2개의 열을 만듭니다.
      </p>
    </div>
  );
}

export function Example2() {
  return (
    <div className={styles.example}>
      <h3>예제 2: fr 단위 사용하기</h3>
      <p>fr 단위를 사용하여 그리드 열의 비율을 지정할 수 있습니다.</p>
      <div className={styles.example2}>
        <div className={styles.item}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
      </div>
      <div>
        사용된 CSS:
        <pre className={styles.codeBlock}>
          {`
    .example2 {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
    }
              `}
        </pre>
      </div>
      <p>
        설명: 1fr 2fr 1fr은 두 번째 열이 첫 번째와 세 번째 열의 두 배 너비를
        가지도록 합니다.
      </p>
    </div>
  );
}

export function Example3() {
  return (
    <div className={styles.example}>
      <h3>예제 3: gap 사용하기</h3>
      <p>gap 속성을 사용하여 그리드 아이템 사이의 간격을 설정할 수 있습니다.</p>
      <div className={styles.example3}>
        <div className={styles.item}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
        <div className={styles.item}>4</div>
      </div>
      <div>
        사용된 CSS:
        <pre className={styles.codeBlock}>
          {`
    .example3 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
              `}
        </pre>
      </div>
      <p>
        설명: gap: 20px는 모든 그리드 아이템 사이에 20픽셀의 간격을 만듭니다.
      </p>
    </div>
  );
}

export function Example4() {
  return (
    <div className={styles.example}>
      <h3>예제 4: 그리드 아이템 배치하기</h3>
      <p>
        grid-column을 사용하여 특정 아이템의 위치와 크기를 지정할 수 있습니다.
      </p>
      <div className={styles.example4}>
        <div className={styles.item}>헤더</div>
        <div className={styles.item}>사이드바</div>
        <div className={styles.item}>메인</div>
        <div className={styles.item}>푸터</div>
      </div>
      <div>
        사용된 CSS:
        <pre className={styles.codeBlock}>
          {`
    .example4 {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: auto 1fr auto;
      gap: 10px;
    }
    .example4 .item:nth-child(1) { grid-column: 1 / -1; } /* 헤더 */
    .example4 .item:nth-child(4) { grid-column: 1 / -1; } /* 푸터 */
              `}
        </pre>
      </div>
      <p>
        설명: grid-column: 1 / -1은 해당 아이템이 전체 너비를 차지하도록 합니다.
      </p>
    </div>
  );
}

export function Problem1() {
  // 문제 1은 충분히 다르므로 그대로 유지합니다.
  return (
    <div className={styles.problem}>
      <h3>문제 1: 3열 그리드 만들기</h3>
      <p>지시사항: 아래의 6개 아이템을 3열 그리드로 배치해보세요.</p>
      <ol>
        <li>display: grid를 사용하여 그리드 컨테이너를 만드세요.</li>
        <li>grid-template-columns를 사용하여 3개의 열을 만드세요.</li>
      </ol>
      <div className={styles.problem1}>
        <div className={styles.item}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
        <div className={styles.item}>4</div>
        <div className={styles.item}>5</div>
        <div className={styles.item}>6</div>
      </div>
      <p className={styles.hint}>
        힌트: grid-template-columns: auto auto auto; 를 사용해보세요.
      </p>
    </div>
  );
}

export function Problem2() {
  return (
    <div className={styles.problem}>
      <h3>문제 2: fr 단위로 열 너비 조정하기</h3>
      <p>
        지시사항: 아래의 4개 아이템을 배치하되, 첫 번째와 네 번째 열은 좁게,
        가운데 두 열은 넓게 만드세요.
      </p>
      <ol>
        <li>display: grid를 사용하여 그리드 컨테이너를 만드세요.</li>
        <li>
          grid-template-columns를 사용하여 4개의 열을 만들고, fr 단위로 너비를
          지정하세요.
        </li>
      </ol>
      <div className={styles.problem2}>
        <div className={styles.item}>좁은 열</div>
        <div className={styles.item}>넓은 열</div>
        <div className={styles.item}>넓은 열</div>
        <div className={styles.item}>좁은 열</div>
      </div>
      <p className={styles.hint}>
        힌트: grid-template-columns: 1fr 2fr 2fr 1fr; 를 사용해보세요.
      </p>
    </div>
  );
}

export function Problem3() {
  return (
    <div className={styles.problem}>
      <h3>문제 3: gap 설정하기</h3>
      <p>
        지시사항: 아래의 9개 아이템을 3x3 그리드로 배치하고, 아이템 사이에
        10px의 간격을 만드세요.
      </p>
      <ol>
        <li>display: grid를 사용하여 그리드 컨테이너를 만드세요.</li>
        <li>
          grid-template-columns를 사용하여 3개의 동일한 너비의 열을 만드세요.
        </li>
        <li>gap을 사용하여 아이템 사이에 10px의 간격을 만드세요.</li>
      </ol>
      <div className={styles.problem3}>
        {[...Array(9)].map((_, i) => (
          <div key={i} className={styles.item}>
            {i + 1}
          </div>
        ))}
      </div>
      <p className={styles.hint}>
        힌트: grid-template-columns: 1fr 1fr 1fr; 와 gap: 10px; 를 사용해보세요.
      </p>
    </div>
  );
}

export function Problem4() {
  return (
    <div className={styles.problem}>
      <h3>문제 4: 간단한 레이아웃 만들기</h3>
      <p>
        지시사항: 아래의 아이템들을 사용하여 헤더, 왼쪽 사이드바(또는
        네비게이션), 메인 콘텐츠, 오른쪽 사이드바, 푸터로 구성된 레이아웃을
        만드세요.
      </p>
      <ol>
        <li>display: grid를 사용하여 그리드 컨테이너를 만드세요.</li>
        <li>
          3열 그리드를 만들고, 첫 번째 열은 왼쪽 사이드바용으로 좁게, 중간 열은
          메인 콘텐츠용으로 넓게, 마지막 열은 오른쪽 사이드바용으로 좁게
          설정하세요.
        </li>
        <li>헤더와 푸터가 전체 너비를 차지하도록 설정하세요.</li>
        <li>gap을 10px로 설정하세요.</li>
      </ol>
      <div className={styles.problem4}>
        <div className={styles.item}>헤더</div>
        <div className={styles.item}>왼쪽 사이드바</div>
        <div className={styles.item}>메인 콘텐츠</div>
        <div className={styles.item}>오른쪽 사이드바</div>
        <div className={styles.item}>푸터</div>
      </div>
      <p className={styles.hint}>
        힌트: grid-template-columns: 1fr 3fr 1fr; 와 grid-column: 1 / -1; 을
        사용해보세요.
      </p>
    </div>
  );
}
