# 변경 이력

이 프로젝트의 모든 주요 변경 사항이 이 파일에 기록됩니다.

## [0.1.0] - 2025-04-05

### 구현된 기능
- 칸반 보드 기본 기능 구현:
  - 보드 생성 및 관리
  - 작업 항목 생성 및 편집
  - 드래그 앤 드롭으로 작업 이동
  - 작업 로그 기록 및 조회

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