# 변경 이력

이 프로젝트의 모든 주요 변경 사항이 이 파일에 기록됩니다.

## [0.0.3] - 2025-04-06

### 기능 추가
- 사이드바 폼([SideForm](cci:1://file:///Users/jihwooon/Workspaces/typescript-study/programmers/REACT-TASK-APP/src/components/BoardList/SideForm/SideForm.tsx:13:0-55:1))을 통해 새로운 게시판을 추가하는 기능 구현
- 게시판 추가 시 로그(`loggerSlice`)에 관련 기록을 남기는 기능 추가

### 코드 개선
- [SideForm](cci:1://file:///Users/jihwooon/Workspaces/typescript-study/programmers/REACT-TASK-APP/src/components/BoardList/SideForm/SideForm.tsx:13:0-55:1) 컴포넌트 스타일 업데이트 (`SideForm.css.ts`)
- `boardsSlice`에 `addBoard` 액션 추가 및 로직 구현
- `loggerSlice`에 `addLog` 액션 추가 및 로직 구현
- 일부 컴포넌트 스타일 조정 (`App.css.ts`)

## [0.0.2] - 2025-04-06

### 컴포넌트 업데이트
- SideForm 컴포넌트의 초기 상태값 수정 ('1'로 설정)
- 보드 생성 입력 필드에 placeholder 추가
- onBlur 이벤트 핸들러 추가

## [0.0.1] - 2025-04-05

### 보안 업데이트
- 모든 의존성 패키지 최신 버전으로 업데이트
- 388개의 보안 취약점 해결 (15개 심각, 124개 높음, 193개 중간, 56개 낮음)

### 업데이트된 의존성
- React 19.0.0 (최신 버전)
- @reduxjs/toolkit ^2.6.1
- @vanilla-extract/css ^1.17.1
- react-beautiful-dnd ^13.1.1
- react-icons ^5.5.0
- react-redux ^9.2.0
- redux ^5.0.1
- uuid ^11.1.0

## [0.0.0] - 2025-04-05

### 추가된 기능
- React + TypeScript + Vite 기반의 초기 프로젝트 설정
- 상태 관리를 위한 Redux Toolkit 통합
- 기본 프로젝트 구조와 컴포넌트:
  - 보드 관리 기능이 있는 BoardList 컴포넌트
  - 작업 항목을 위한 Task 컴포넌트
  - 작업 구성을 위한 List 컴포넌트
  - DropDownForm이 포함된 ActionButton 컴포넌트
  - 작업 편집을 위한 EditModal
  - 활동 로깅을 위한 LogItem이 포함된 LoggerModal
  - 보드 생성을 위한 SideForm

### 특징
- 다중 슬라이스가 포함된 Redux 스토어 설정:
  - 보드 상태 관리를 위한 boardsSlice
  - 활동 로깅을 위한 loggerSlice
  - 모달 상태 관리를 위한 modalSlice
- 엄격한 타입 검사가 포함된 TypeScript 지원
- 스타일링을 위한 Vanilla Extract CSS
- 코드 품질을 위한 ESLint 구성
- 드래그 앤 드롭 기능을 위한 React Beautiful DnD 통합

### 의존성
- React 19.0.0
- Redux Toolkit
- React Beautiful DnD
- Vanilla Extract CSS
- React Icons
- 고유 식별자를 위한 UUID

### 개발자 경험
- HMR (Hot Module Replacement) 지원
- TypeScript 엄격 모드 활성화
- TypeScript 지원이 포함된 ESLint
- 빌드 도구로 Vite 사용