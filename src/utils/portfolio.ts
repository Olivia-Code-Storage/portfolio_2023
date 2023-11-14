import * as img from '../assets/thumbnail'

export const portfolio = [
  {
    id: 1,
    img: img.diedie,
    name: 'DIEDIE.gg',
    team: '팀프로젝트 (FE 4, BE 3, DE 1)',
    period: '23.08.04 ~ 23.09.05',
    stacks: '#TypeScript,#React,#Recoil,#Tanstack-Query,#Styled-Components',
    links: {
      GitHub: 'https://github.com/diedielolorg/diediefrontend',
      Blog: 'https://oliviakim.tistory.com/178',
      Notion: 'https://diedie.notion.site/diedie/DIEDIE-gg-13f2db91627e49cf8cc31c2242e191e6',
    },
    description:
      '리그 오브 레전드 유저 정보 조회 및 악성 유저 신고 커뮤니티입니다.\n프로젝트 초기 세팅 및 Chart.js를 이용한 통계 데이터 시각화, 코드 추상화 등을 적용했습니다.',
  },
  {
    id: 2,
    img: img.belog,
    name: 'BELOG',
    team: '개인프로젝트',
    period: '23.08.26 ~ 23.09.01',
    stacks: '#TypeScript,#React,#Recoil,#Styled-Components,#Python,#Flask,#MongoDB',
    links: {
      GitHub: 'https://github.com/Be-log/be-log',
    },
    description:
      '개발자를 위한 블로그 서비스인 벨로그의 클론 코딩입니다.\n프론트단만 담당했던 기존의 협업 프로젝트를 풀스택 개인 프로젝트로 재구현하였습니다.',
  },
  {
    id: 3,
    img: img.dawhisky,
    name: 'DA WHISKY',
    team: '팀프로젝트 (FE 2, BE 3, DE 1)',
    period: '23.05.19 ~ 23.06.30',
    stacks: '#JavaScript,#React,#Recoil,#React-Query,#Styled-Components',
    links: {
      GitHub: 'https://github.com/dawhisky/dawhisky-FE',
      Notion: 'https://team-spirits.oopy.io/',
    },
    description:
      '위스키의 진입 장벽을 낮추기 위한 위스키 체험 온라인 플랫폼입니다.\n공통 컴포넌트 및 전반적인 UI 구현, 무한 스크롤, 카카오맵, 추천 검색어 기능 등을 담당했습니다.',
  },
]
