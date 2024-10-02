# React-Todo-List

## Hood's comment - Sep 25 2024
일단 React 자체가 익숙치 않으신 경우라면 Nextjs나 ReactNative를 살펴보기 이전에 React의 기본 라이프 사이클과 철학, 개념 등을 익히고 그 다음 Nextjs 프레임워크 실습을 하면 좋을 것 같아요.

* 도큐먼트 뽀개기: https://developer.mozilla.org/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

## 1. 리액트 시작하기 (Oct 2 2024 수)
- create-react-app 사용할 것
1) command-line interface
2) 패키지 설치 및 파일 생성 => 앱 개발 준비 과정 신속하게 처리

- Requirements
1) Node.js (npm: node package manager): Yarn 보다 먼저 출시됨. 다운로드 수 및 점유율 비교적 높음. (Install 완)
2) Yarn: npn 을 개선한 버전. 속도(performance) 와 security 부분이 향상되었으나 디스크 용량 더 잡아먹는다고 함.
3) Gitbash (Install 완) 또는 WSL

- 앱 초기화: create-react-app 을 통해
1) 필수적인 npm 패키지 설치
2) 앱 시작 및 서비스 위한 스크립트 작성
3) 앱 아키텍쳐 정의하는 파일 및 디렉토리 구조 만듦
4) 컴퓨터에 깃이 설치된 경우: 디렉토리를 (루트를???) 깃 레포지토리로 초기화
5) 터미널에서 다음 커맨드 실행: npx create-react-app moz-todo-react --use-npm
6) moz-todo-react 디렉토리 안에서 'npm start' 커맨드 실행

![image](https://github.com/user-attachments/assets/224d2e9a-8784-4b50-8ab1-2604845117ac)

- 애플리케이션 구조

![image](https://github.com/user-attachments/assets/0b1f9684-6747-40dd-9492-939b02154dca)

1) src: 애플리케이션의 소스코드가 위치한 directory -> 가장 시간 많이 보낼 곳
2) public: 앱 개발 동안 브라우저가 읽을 파일 가진 directory ex) index.html
3) package.json 파일: Node.js/npm 이 프로젝트 organize 하기 위해 사용하는 정보 포함 - dependency

- 첫번째 React 컴포넌트 </App> 탐색하기
1) App 컴포넌트: 리액트 컴포넌트는 pascal-case 사용하며, 이는 JSX 요소가 정규 HTML 태그가 아니라 React 컴포넌트라는 사실을 분명히 하기 위함임. Therefore, App() 은 소문자 app() 으로 적으면 에러 반환할 것.
2) App() 은 JSX 표현식을 리턴하며, 이는 Browser 가 DOM 에 궁극적으로 Rendering 할 내용을 정의함.
3) Export 문: export default App 이라는 명령문 통해 App 컴포넌트를 다른 모듈에서도 사용 가능하도록 함.
