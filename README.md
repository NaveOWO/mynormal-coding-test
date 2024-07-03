### 실행방법

```
// client
yarn start

// server
yarn server
```

### 요구사항

---

#### 전체 상품 목록 페이지

- [x] `셀러명, 상품명, 가격, 관심 셀러 등록 여부` 리스트를 출력
- [x] ‘더보기’ 버튼을 클릭하면 다음 순번의 상품 목록을 같은 페이지에 추가
- [x] 상품 리스트마다 ‘관심 셀러 등록/취소’ 버튼 등록
- [x] 셀러명을 클릭하면 ‘셀러별 상품 목록 페이지’로 이동
- [x] 상품명을 클릭하면 ‘상품 상세 페이지’로 이동

#### 셀러별 상품 목록 페이지

- [x] `셀러명, 관심 셀러 등록 여부`를 출력
- [x] `상품명, 가격` 리스트를 출력
- [x] ‘더보기’ 버튼을 클릭하면 다음 순번의 상품 목록을 같은 페이지에 추가
- [x] 상품명을 클릭하면 ‘상품 상세 페이지’로 이동

#### 상품 상세 페이지

- [x] `셀러명, 상품명, 가격, 관심 셀러 등록 여부`를 출력
- [x] ‘관심 셀러 등록/취소’ 버튼 등록
- [x] 셀러명을 클릭하면 ‘셀러별 상품 목록 페이지’로 이동

#### 전체

- [x] 서비스 전체에서 일관된 관심 셀러 등록 여부 상태를 유지
- [x] ‘현재 페이지’에서 특정 페이지로 이동한 후 뒤로가기로 돌아올 때, ‘현재 페이지’의 상태를 유지

### 구현사항

---

- 데이터패칭
  - axios & tanstack-query사용
  - useSuspenseInfiniteQuery를 통해 더보기 데이터 패칭 구현
  - status의 pending상태에 따라 스켈레톤 이미지를 보여줌
  - query-string을 통해 현재 불러온 데이터 index윤지
  - query-string와 tansack-query gcTime을 통해 특정페이지에서 다시 돌아왔을 때 데이터 상태 유지
  - QUERY_KEY factory를 통해 쿼리키 관리
- 에러핸들링
  - ErrorBoundary & Suspense 사용
  - 데이터패칭을 하는 컴포넌트만 부분적으로 감싸 UX향상
- 관심셀러등록
  - zustand상태관리 라이브러리릁 통해 전역상태 관리
  - favorites, register, unRegister를 통해 관심셀러 등록 & 취소
  - favoriteStoreAction를 통해 렌더링 최적화
- 라우팅
  - useNavigate를 이용항 useRouter훅을 생성하여 라우팅처리
  - push, replace, back메서드 구현
- 쿼리스트링
  - zod라이브러리를 통해 쿼리스트링으로 지정한 값의 타입 안정성 확보
  - getStringQS 함수 생성
- 스타일
  - styled-components 사용
  - themeProvider를 이용해 폰트와 색상 정의
- 환경설정
  - webpack & babel을 이용한 리액트 환경설정
