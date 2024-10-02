# React-Todo-List

## Hood 선생님's comment - Sep 25 2024
일단 React 자체가 익숙치 않으신 경우라면 Nextjs나 ReactNative를 살펴보기 이전에 React의 기본 라이프 사이클과 철학, 개념 등을 익히고 그 다음 Nextjs 프레임워크 실습을 하면 좋을 것 같아요.

* 리액트 예제 to follow: https://developer.mozilla.org/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

## 1. 리액트 시작하기 (Oct 2 2024 수)
### create-react-app 사용할 것
1) command-line interface
2) 패키지 설치 및 파일 생성 => 앱 개발 준비 과정 신속하게 처리

### Requirements
1) Node.js (npm: node package manager): Yarn 보다 먼저 출시됨. 다운로드 수 및 점유율 비교적 높음. (Install 완)
2) Yarn: npn 을 개선한 버전. 속도(performance) 와 security 부분이 향상되었으나 디스크 용량 더 잡아먹는다고 함.
3) Gitbash (Install 완) 또는 WSL

### 앱 초기화: create-react-app 을 통해..
1) 필수적인 npm 패키지 설치
2) 앱 시작 및 서비스 위한 스크립트 작성
3) 앱 아키텍쳐 정의하는 파일 및 디렉토리 구조 만듦
4) 컴퓨터에 깃이 설치된 경우: 디렉토리를 (루트를???) 깃 레포지토리로 초기화
5) 터미널에서 다음 커맨드 실행: npx create-react-app moz-todo-react --use-npm
6) moz-todo-react 디렉토리 안에서 'npm start' 커맨드 실행

![image](https://github.com/user-attachments/assets/224d2e9a-8784-4b50-8ab1-2604845117ac)

### 애플리케이션 구조

![image](https://github.com/user-attachments/assets/0b1f9684-6747-40dd-9492-939b02154dca)

1) src: 애플리케이션의 소스코드가 위치한 directory -> 가장 시간 많이 보낼 곳
2) public: 앱 개발 동안 브라우저가 읽을 파일 (index.html 등) 가진 directory
3) package.json 파일: Node.js/npm 이 프로젝트 organize 하기 위해 사용하는 정보 포함 - dependency

### 첫번째 React 컴포넌트 </App> 탐색하기
1) App 컴포넌트: 리액트 컴포넌트는 pascal-case 사용하며, 이는 JSX 요소가 정규 HTML 태그가 아니라 React 컴포넌트라는 사실을 분명히 하기 위함임. Therefore, App() 은 소문자 app() 으로 적으면 에러 반환할 것.
2) App() 은 JSX 표현식을 리턴하며, 이는 Browser 가 DOM 에 궁극적으로 Rendering 할 내용을 정의함.
3) Export 문: export default App 이라는 명령문 통해 App 컴포넌트를 다른 모듈에서도 사용 가능하도록 함.

### Interrogating the index: React 의 ReactDOM.render() 함수 호출할 것이며, 여기엔 두가지의 인수가 있다.
1) 렌더링하고자 하는 컴포넌트 (예제의 경우 `</App>`)
2) 렌더링하고자 하는 컴포넌트 들이 포함된 DOM 요소 (예제의 경우 root 라는 id 가진 요소)
=> 1~2번 통해 React 에게 '루트로써, 혹은 첫 번째 컴포넌트로써 App 컴포넌트를 렌더링하기 원한다' 전달하는 과정.

### 변수와 Props
1) prop 은 React 컴포넌트에 전달되는 모든 데이터를 의미함.
2) HTML 요소는 properties (속성) 을 가지고 있다면, React 컴포넌트는 props 가지고 있음.
3) Props 는 컴포넌트 호출 안에 쓰이며 props="value" 와 같이 HTML 속성과 동일한 구문 씀.
4) React 에서 데이터의 흐름은 단방향(unidirectional)임: props 는 오직 부모 컴포넌트에서 자식 컴포넌트로 내려가기만 할 수 있음.
5) Props 는 오로지 읽기 전용임.

## 2. React todo list 시작하기 (Oct 2 2024 수)
### 프로젝트를 실행하기 전 점검하기
1) create-react-app은 우리의 프로젝트에서 전혀 사용하지 않을 파일을 몇 개 만듦.
2) 컴포넌트마다 스타일 시트를 만들지 않을 것이므로, 우선 App.js의 상단에 App.css를 임포트하고 있는 문 지우기.
3) logo.svg 파일 역시 사용하지 않을 것이므로, 이것을 임포트하고 있는 문 역시 삭제.
4) 그러고 나서 필요하지 않은 파일들을 삭제하기 위해 터미널에 아래의 커맨드들을 복붙. (애플리케이션의 루트 디렉토리에서 터미널을 실행하고 있는지 확인할것.)

```
# 프로젝트의 src 디렉토리로 이동
cd src
# 파일들을 삭제
rm -- App.test.js App.css logo.svg serviceWorker.js setupTests.js
# 프로젝트의 루트 디렉토리로 다시 돌아오기
cd ..
```

### 프로젝트 시작 코드
![image](https://github.com/user-attachments/assets/1e2f5ef1-9851-4539-8962-eb88fadf1f9a)

## 3. React 앱 컴포넌트화 (Oct 2 2024 수)
###  `<Todo />` 만들기
```
mkdir src/components
touch src/components/Todo.js
```

### 반복을 사용한 Rendering
1) 객체 배열을 렌더링하려면 => 각 객체를 <Todo /> 컴포넌트로 변환해야 함.
2) JavaScript는 항목을 다른 것으로 변환하는 Array.prototype.map() 배열 메서드를 제공함.

![image](https://github.com/user-attachments/assets/e0872395-10dc-4255-b3a4-7b32a1153079)
