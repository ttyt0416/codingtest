# 이 repository는 코딩테스트 제출용입니다.

## 사용 스택

- react.js
- react hooks
- redux
- styled component
- material table

## 소개

이 사이트는 코딩테스트를 위해 제작되었으며 757px, 1023px에 브레이크 포인트를 둔 반응형으로 제작되었습니다.

### 홈페이지

- 이미지 슬라이드
  데스크탑에선 마우스를 올릴시 양옆에 버튼이 나타나며 이를 통해 컨트롤 할 수 있으며, 태블릿, 모바일에선 드래그&드롭을 통해 컨트롤 할 수 있습니다.

### 내비게이션

왼쪽에서부터 홈페이지 이동, beerlist(material table) 이동, 카트, 다크모드/라이트모드 전환기능을 넣었습니다.

### BeerList

material table 라이브러리 및 material ui icons를 활용해 제작되었습니다.
action란을 제외한 헤더들은 드래그&드롭을 통해 순서 변경이 가능하며 좌측 상단의 resset order버튼을 통해 순서를 리셋할 수 있습니다.
filter by abv클릭시 밑에 나오는 체크박스들을 통해 제품들을 abv를 기준으로 필터링 할 수 있으며, 이 또한 체크박스들 밑의 reset버튼으로 리셋 할 수 있습니다.
우측 상단의 검색란을 통한 검색 또한 가능합니다.

### Cart

Beerlist의 action란에 있는 장바구니 아이콘 클릭을 통해 cart redux에 저장되게 하였으며, cart dropdown에서 이미 들어있는 아이템들의 추가, 감소, 카트 리셋이 가능하며, 1미만으로 감소할시 삭제되게 하였습니다.
