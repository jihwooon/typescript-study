# 변경 로그

## [1.0.0] - 2025-04-14

### 추가됨
- 리액트 라우터 설치 및 설정
- 홈, 뉴, 다이어리 페이지 추가
- 404 페이지(NotFound) 추가

### 변경됨
- App.tsx에서 라우트 구조 업데이트
- App.tsx의 CSS 문법 오류 수정 (display: 'flex' 다음에 콤마 추가)

## [1.0.1] - 2025-04-14

### 추가됨
- 다이어리 상세 페이지 라우트 파라미터 지원
- 홈 페이지 URL 쿼리 파라미터 처리 기능

### 변경됨
- Diary 컴포넌트에서 useParams 훅 사용으로 개선
- Home 컴포넌트에서 useSearchParams 훅 추가

## [1.0.2] - 2025-04-14

### 추가됨
- 감정 이미지 5종 추가 (emotion1.png ~ emotion5.png)
- get-emotion-image 유틸리티 함수 구현
- 나눔손글씨 폰트 적용

### 변경됨
- 전반적인 CSS 리팩토링 (레이아웃 개선)
- App 컴포넌트에 감정 이미지 미리보기 추가

## [1.0.3] - 2025-04-14

### 변경됨
- App 컴포넌트 레이아웃 스타일 개선
- 감정 이미지 미리보기 하단 마진 추가
- 네비게이션 메뉴 가운데 정렬 적용
- 불필요한 미디어 쿼리 제거
