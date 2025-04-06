# 태스크 관리

## 완료된 태스크

### UI/UX 디자인
- [x] 피그마 디자인 시스템 기반 컴포넌트 디자인
- [x] 다크 모드 지원

### 컴포넌트 개발
- [x] Board 컴포넌트 생성
- [x] List 컴포넌트 생성 및 스타일링
- [x] Task 컴포넌트 생성 및 스타일링
- [x] ListContainer 컴포넌트 생성
- [x] ActionButton 컴포넌트 (드롭다운 포함) 생성
- [x] EditModal 컴포넌트 생성
- [x] LoggerModal 컴포넌트 생성
- [x] BoardList 컴포넌트 생성
- [x] SideForm 컴포넌트 생성

### 상태 관리
- [x] Redux Toolkit 설정
- [x] boardsSlice 업데이트 - `addBoard`, `deleteBoard` 액션 및 중앙 타입 적용
- [x] loggerSlice 업데이트 - `addLog` 액션 구현
- [x] modalSlice 업데이트 - `setModalData`, `setModalActive` 액션 및 중앙 타입 적용
- [x] TypeScript 타입 중앙 관리 (`src/types/index.ts`)

### 기능 구현
- [x] 드래그 앤 드롭 (react-beautiful-dnd) 통합
- [x] UUID 통합 - 고유 식별자 생성
- [x] SideForm을 통한 새 게시판 추가 기능 구현
- [x] 게시판 추가 시 로그 기록 기능 구현
- [x] 리스트 삭제 기능 구현
- [x] 작업 클릭 시 편집 모달 표시 및 데이터 설정

## 진행 중인 태스크 

### 기능 구현
- [ ] 태스크 추가 기능 구현
- [ ] 태스크 삭제 기능 구현
- [ ] 태스크 편집 기능 구현 (EditModal 연동)
- [ ] 보드 삭제 기능 구현

### 개선 사항
- [ ] 컴포넌트 리팩토링 및 최적화
- [ ] 테스트 코드 작성 (Unit, Integration)
- [ ] 접근성 개선
- [ ] 반응형 디자인 적용