# Tasks

## 완료된 태스크 

### 보안 및 의존성 업데이트
- [x] 모든 의존성 패키지 최신 버전으로 업데이트
- [x] 보안 취약점 해결 (388개)
- [x] package.json 업데이트

### 프로젝트 초기 설정
- [x] React + TypeScript + Vite 프로젝트 설정
- [x] ESLint 설정
- [x] TypeScript 엄격 모드 활성화
- [x] Vanilla Extract CSS 설정

### 컴포넌트 구현
- [x] BoardList 컴포넌트 - 보드 목록 표시 및 관리
- [x] Task 컴포넌트 - 개별 작업 항목 표시
- [x] List 컴포넌트 - 작업 목록 구성
- [x] ActionButton 컴포넌트 - 드롭다운 메뉴 포함
- [x] EditModal 컴포넌트 - 작업 편집 기능
- [x] LoggerModal 컴포넌트 - 활동 로그 표시
- [x] SideForm 컴포넌트 - 보드 생성 폼
- [x] ListContainer 컴포넌트 - 리스트 목록 표시 및 관리

### 컴포넌트 개선
- [x] SideForm 컴포넌트 입력 필드 초기값 설정
- [x] SideForm 컴포넌트 onBlur 이벤트 처리 추가
- [x] 보드 생성 입력 필드 placeholder 추가

### 상태 관리
- [x] Redux Toolkit 설정
- [x] boardsSlice 업데이트 - `addBoard` 액션 및 중앙 타입 적용
- [x] loggerSlice 업데이트 - `addLog` 액션 구현
- [x] modalSlice 업데이트 - 중앙 타입 적용
- [x] TypeScript 타입 중앙 관리 (`src/types/index.ts`)

### 기능 구현
- [x] React Beautiful DnD 통합 - 드래그 앤 드롭
- [x] UUID 통합 - 고유 식별자 생성
- [x] SideForm을 통한 새 게시판 추가 기능 구현
- [x] 게시판 추가 시 로그 기록 기능 구현

## 진행 중인 태스크 

### UI/UX 개선
- [ ] 반응형 디자인 구현
- [ ] 다크 모드 지원
- [ ] 로딩 상태 표시
- [ ] 에러 처리 UI

### 기능 확장
- [ ] 보드 검색 기능
- [ ] 작업 필터링
- [ ] 작업 우선순위 설정
- [ ] 작업 마감일 설정
- [ ] 작업 태그 기능

### 성능 최적화
- [ ] 컴포넌트 메모이제이션
- [ ] 대규모 데이터 처리 최적화
- [ ] 이미지 최적화

### 테스트
- [ ] 단위 테스트 작성
- [ ] 통합 테스트 작성
- [ ] E2E 테스트 구현

### 문서화
- [ ] 컴포넌트 문서화
- [ ] API 문서화
- [ ] 사용자 가이드 작성

## 향후 고려사항 
- [ ] 다국어 지원
- [ ] 테마 커스터마이징
- [ ] 데이터 백업/복원 기능
- [ ] 협업 기능 (공유, 댓글 등)
- [ ] 알림 시스템
- [ ] PWA 지원