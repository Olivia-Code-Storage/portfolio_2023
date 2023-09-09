import { styled } from 'styled-components'
import { arrowDown } from '../assets'

const Intro = () => {
  return (
    <WrapIntro>
      <IntroduceDiv>
        <p>{'안녕하세요!'}</p>
        <div>
          <span>{'[ '}</span>
          <span>{''}</span>
          <span>{' ]는 개발자,'}</span>
        </div>
        <p>{'김한솔입니다.'}</p>
      </IntroduceDiv>
      <ScrollDiv>
        <div />
        <div />
      </ScrollDiv>
    </WrapIntro>
  )
}

export default Intro

const WrapIntro = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const IntroduceDiv = styled.div`
  margin-left: 100px;
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  &::before {
    content: '';
    width: 50px;
    height: 450px;
    position: absolute;
    top: 190px;
    left: 0;
    border-left: 10px solid ${({ theme }) => theme.ab};
  }
  p,
  span {
    font-size: 80px;
    font-weight: 800;
  }
`

const ScrollDiv = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  div {
    width: 35px;
    height: 35px;
    position: absolute;
    background: url(${arrowDown}) 50% 50% no-repeat;
    background-size: 35px 35px;
    filter: invert(100%);
  }
  div:nth-child(1) {
    animation: scrolldown 1300ms 650ms linear infinite;
    animation-fill-mode: backwards;
  }
  div:nth-child(2) {
    animation: scrolldown 1300ms linear infinite;
  }
  @keyframes scrolldown {
    0% {
      bottom: 50px;
      opacity: 0;
    }

    50% {
      bottom: 35px;
      opacity: 0.3;
    }

    100% {
      bottom: 18px;
      opacity: 0;
    }
  }
`
