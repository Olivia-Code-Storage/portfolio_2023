import { useState } from 'react'
import { styled } from 'styled-components'
import { portfolio } from '../utils/portfolio'
import { Tags, Buttons } from './common'
import { arrow } from '../assets/ui'

const Projects = () => {
  const [currentIdx, setCurrentIdx] = useState(1)

  const onPrevClickHandler = () => {
    const newIdx = currentIdx === 1 ? portfolio.length : currentIdx - 1
    setCurrentIdx(newIdx)
  }

  const onNextClickHandler = () => {
    const newIdx = currentIdx === portfolio.length ? 1 : currentIdx + 1
    setCurrentIdx(newIdx)
  }

  return (
    <WrapProjects>
      <h1>{'Projects'}</h1>
      <div>
        <MoveButton type={'button'} $type={'prev'} onClick={onPrevClickHandler}>
          <img src={arrow} alt={'prev arrow'} />
        </MoveButton>
        {portfolio.map(
          (item) =>
            item.id === currentIdx && (
              <ProjectDiv key={item.id}>
                <img width={800} height={430} src={item.img} alt={`${item.name} main page screenshot`} />
                <h2>{item.name}</h2>
                <InfoDiv>
                  <span>{item.team}</span>
                  <span>{item.period}</span>
                </InfoDiv>
                <h3>{item.description}</h3>
                <div>
                  <Tags tags={item.stacks} />
                </div>
                <div>
                  <Buttons links={item.links} />
                </div>
              </ProjectDiv>
            ),
        )}
        <MoveButton type={'button'} $type={'next'} onClick={onNextClickHandler}>
          <img src={arrow} alt={'next arrow'} />
        </MoveButton>
      </div>
    </WrapProjects>
  )
}

export default Projects

const WrapProjects = styled.section`
  margin: 0 -250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(rgba(48, 63, 99, 0.8), rgba(21, 30, 47, 0.7), rgba(12, 23, 38, 0.6));
  h1 {
    padding: 20px 0 40px 0;
    text-align: center;
    font-size: 45px;
    font-weight: 900;
  }
  & > div {
    display: flex;
    align-items: center;
  }
`

const MoveButton = styled.button<{ $type: string }>`
  width: 100px;
  height: 100px;
  background: url(${arrow});
  transform: rotate(${({ $type }) => ($type === 'prev' ? '90deg' : '-90deg')});
  filter: invert(30%);
  animation: ${({ $type }) => ($type === 'prev' ? 'prevMoving' : 'nextMoving')} 1800ms ease-in-out infinite;
  @keyframes prevMoving {
    0% {
      transform: rotate(90deg) translateY(0px);
    }
    50% {
      transform: rotate(90deg) translateY(20px);
    }
    100% {
      transform: rotate(90deg) translateY(0px);
    }
  }
  @keyframes nextMoving {
    0% {
      transform: rotate(-90deg) translateY(0px);
    }
    50% {
      transform: rotate(-90deg) translateY(20px);
    }
    100% {
      transform: rotate(-90deg) translateY(0px);
    }
  }
`

const ProjectDiv = styled.div`
  width: 1000px;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  transition: opacity 0.5s ease-in-out;
  h2 {
    margin-top: 10px;
    font-size: 30px;
    font-weight: 900;
  }
  h3 {
    font-size: 18px;
    line-height: 22px;
    text-align: justify;
    white-space: pre-line;
  }
`

const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    margin-top: -5px;
  }
  span:first-child {
    color: ${({ theme }) => theme.xy};
  }
  span:last-child {
    color: ${({ theme }) => theme.gray};
  }
`
