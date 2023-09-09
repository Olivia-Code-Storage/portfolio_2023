import { styled } from 'styled-components'
import { background, astronaut } from '../assets'

const About = () => {
  return (
    <WrapAbout>
      <SayingDiv>
        <p>{'Wherever you go,\nto with all your heart.'}</p>
      </SayingDiv>
      <DescriptionDiv>
        <p>{'어디를 가든지 마음을 다 해 가라.\n항상 마음에 새기고 실천하려 노력하는 문장입니다.'}</p>
        <p>
          {'이를 위해 기능을 구현할 때는 단순히 개발자만의 입장에서 생각하지 않고\n사용자가 '}
          <strong>{'긍정적인 사용자 경험'}</strong>
          {'을 느낄 수 있을지 고민하며 코드를 구현합니다.'}
        </p>
        <p>
          {'또한 업무를 할 때는 이름을 걸고 일한다는 생각으로\n'}
          <strong>{'능동적'}</strong>
          {'으로 해야 할 일을 찾고, 최선을 다해 '}
          <strong>{'기한 내에 결과물을 산출'}</strong>
          {'하려 노력합니다.'}
        </p>
        <p>
          {'업무도, 협업도 진심을 다해 '}
          <strong>{'함께 일하고 싶은 개발자'}</strong>
          {'가 되고자 합니다.'}
        </p>
      </DescriptionDiv>
    </WrapAbout>
  )
}

export default About

const WrapAbout = styled.section`
  margin: 0 -250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.kon};
  p {
    margin-left: 850px;
    white-space: pre-line;
  }
  p > strong {
    padding: 0 5px;
    font-weight: 600;
    background-color: ${({ theme }) => theme.xy};
    color: ${({ theme }) => theme.nero};
  }
  &::before,
  &::after {
    content: '';
    width: 500px;
    height: 700px;
    position: absolute;
    top: 15%;
    left: 13%;
  }
  &::before {
    background-image: url(${background});
  }
  &::after {
    background: url(${astronaut}) center center no-repeat;
    background-size: 90px;
    animation: moving 15s linear infinite;
    @keyframes moving {
      0%,
      100% {
        top: 5%;
      }
      25%,
      75% {
        top: 15%;
      }
      50% {
        top: 25%;
      }
    }
  }
`

const SayingDiv = styled.div`
  padding-top: 100px;
  p {
    font-size: 65px;
    font-weight: 800;
  }
`

const DescriptionDiv = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  p {
    font-size: 25px;
    line-height: 40px;
  }
`
