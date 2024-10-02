# React-Todo-List

[Hood - Sep 25 2024]
일단 React 자체가 익숙치 않으신 경우라면 Nextjs나 ReactNative를 살펴보기 이전에 React의 기본 라이프 사이클과 철학, 개념 등을 익히고 그 다음 Nextjs 프레임워크 실습을 하면 좋을 것 같아요.

[도큐먼트 뽀개기]
https://developer.mozilla.org/ko/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

[1. 리액트 시작하기 (2024/10/02 수)]
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
