# 태스크 정리 앱 만들기 시작

이 프로젝트는 React, Redux Toolkit, Vanilla Extract CSS 등을 사용하여 개발된 할 일 목록 관리 애플리케이션입니다.

## 태스크 정리 앱 모듈 실행하기
### 1. [react-task-app 프로젝트 생성하기](https://ko.vitejs.dev/guide/#scaffolding-your-first-vite-project)
```shell
npm create vite@latest // vite setup

1. react-task-app
2. react 
3. typescript 

npm run dev // vite 실행하기
```

### 2. 컴포넌트 구조
```
📦src
┣ 📂assets
┃ ┗ 📜react.svg
┣ 📂components
┃ ┣ 📂ActionButton
┃ ┃ ┣ 📂DropDownForm
┃ ┃ ┃ ┣ 📜DropDownForm.tsx
┃ ┃ ┃ ┗ 📜DropDwonForm.css.ts
┃ ┃ ┣ 📜ActionButton.css.ts
┃ ┃ ┗ 📜ActionButton.tsx
┃ ┣ 📂BoardList
┃ ┃ ┣ 📂SideForm
┃ ┃ ┃ ┣ 📜SideForm.tsx
┃ ┃ ┃ ┗ 📜SideFrom.css.ts
┃ ┃ ┣ 📜BoardList.css.ts
┃ ┃ ┗ 📜BoardList.tsx
┃ ┣ 📂EditModal
┃ ┃ ┣ 📜EditModal.css.ts
┃ ┃ ┗ 📜EditModal.tsx
┃ ┣ 📂List
┃ ┃ ┣ 📜List.css.ts
┃ ┃ ┗ 📜List.tsx
┃ ┣ 📂ListContainer
┃ ┃ ┣ 📜ListContainer.css.ts
┃ ┃ ┗ 📜ListContainer.tsx
┃ ┣ 📂LoggerModal
┃ ┃ ┣ 📂LogItem
┃ ┃ ┃ ┗ 📜LogItem.tsx
┃ ┃ ┣ 📜LoggerModal.css.ts
┃ ┃ ┗ 📜LoggerModal.tsx
┃ ┗ 📂Task
┃ ┃ ┣ 📜Task.css.ts
┃ ┃ ┗ 📜Task.tsx
┣ 📂hook
┃ ┗ 📜redux.ts
┣ 📂store
┃ ┣ 📂reducer
┃ ┃ ┗ 📜reducer.ts
┃ ┣ 📂slices
┃ ┃ ┣ 📜boardSlice.ts
┃ ┃ ┣ 📜loggerSlice.ts
┃ ┃ ┗ 📜modalSlice.ts
┃ ┗ 📜index.ts
┣ 📂types
┃ ┗ 📜index.ts
┣ 📜App.css
┣ 📜App.tsx
┣ 📜index.css
┣ 📜main.tsx
┗ 📜vite-env.d.ts
```

### 3. 필요한 패키지 설치하기
```shell
npm install @reduxjs/toolkit redux clsx @vanilla-extract/css @vanilla-extract/css-utils @vanilla-extract/vite-plugin react-icons uuid react-beautiful-dnd
```
- `@reduxjs/toolkit`: Redux 개발을 간소화하는 공식 도구 세트입니다.
- `redux`: 상태 관리 라이브러리로 애플리케이션의 전역 상태를 예측 가능한 방식으로 관리합니다.
- `clsx`: 조건부 클래스 이름을 쉽게 생성하는 유틸리티 함수입니다.
- `@vanilla-extract/css`: CSS-in-JS 라이브러리로 타입 안정성과 런타임 성능을 제공합니다.
- `@vanilla-extract/css-utils`: @vanilla-extract/css를 위한 유틸리티 함수 모음입니다.
- `@vanilla-extract/vite-plugin`: Vite에서 @vanilla-extract/css를 사용하기 위한 플러그인입니다.
- `react-icons`: 다양한 아이콘 라이브러리의 아이콘을 React 컴포넌트로 쉽게 사용할 수 있도록 해줍니다.
- `uuid`: 고유 식별자(UUID)를 생성하는 라이브러리입니다.
- `react-beautiful-dnd`: React 애플리케이션에서 드래그 앤 드롭 기능을 간편하게 구현할 수 있도록 해주는 라이브러리입니다.
