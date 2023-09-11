import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { arrow } from '../assets/ui'

const Intro = () => {
  const [currentWord, setCurrentWord] = useState('')
  const [count, setCount] = useState(0)

  const text = '안녕하세요!\nUX를 생각하는 개발자,\n김한솔입니다.'

  useEffect(() => {
    const typingWord = setInterval(() => {
      if (count < text.length) {
        setCurrentWord((prev) => prev + text[count])
        setCount(count + 1)
      } else {
        clearInterval(typingWord)
      }
    }, 150)

    return () => {
      clearInterval(typingWord)
    }
  }, [count])

  return (
    <WrapIntro>
      <IntroduceDiv>
        <p>{currentWord}</p>
      </IntroduceDiv>
      <ScrollDiv>
        <div />
        <div />
      </ScrollDiv>
      <SentenceP>{'본 페이지는 PC화면에 최적화되어있습니다.'}</SentenceP>
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
  p {
    font-size: 80px;
    font-weight: 800;
    line-height: 120px;
    letter-spacing: 2px;
    white-space: pre-line;
  }
  p::after {
    content: '';
    margin-left: 0.4rem;
    border-right: 2px solid ${({ theme }) => theme.gray};
    animation: cursor 0.9s infinite steps(2);
  }
  &::before {
    content: '';
    width: 50px;
    height: 450px;
    position: absolute;
    top: 25%;
    left: 0;
    border-left: 10px solid ${({ theme }) => theme.ab};
  }
  @keyframes cursor {
    from {
      border-right: 2px solid #222;
    }
    to {
      border-right: 2px solid ${({ theme }) => theme.gray};
    }
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
    background: url(${arrow}) center center no-repeat;
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

const SentenceP = styled.p`
  margin-right: -210px;
  position: absolute;
  bottom: 30px;
  right: 0;
  color: ${({ theme }) => theme.gray};
  font-style: italic;
`
