import { useState } from 'react'
import { styled } from 'styled-components'
import { mainStacks, tools } from '../utils/stacks'
import { StackType, StackProps } from '../interface/componentTypes'

const Stacks = () => {
  const [hovered, setHovered] = useState('')

  const onMouseOverHandler = (name: string) => setHovered(name)
  const onMouseLeaveHandler = () => setHovered('')

  const renderSkill = ({ skill, category }: StackType) => (
    <SkillDiv
      key={skill.name}
      onMouseOver={() => onMouseOverHandler(skill.name)}
      onMouseLeave={onMouseLeaveHandler}
      $isHovered={hovered === skill.name}
      $category={category}
    >
      <ul>
        <li>
          <img src={skill.img} alt={`${skill.name} logo`} />
          {hovered === skill.name && (
            <div>
              <h2>{skill.name}</h2>
              <h3>{skill.description}</h3>
            </div>
          )}
        </li>
      </ul>
    </SkillDiv>
  )

  return (
    <WrapStacks>
      <h1>{'Main Stacks'}</h1>
      {[mainStacks.slice(0, 5), mainStacks.slice(5)].map((stackGroup, groupIdx) => (
        <StacksSection key={groupIdx}>
          {stackGroup.map((skill) => renderSkill({ skill, category: 'main' }))}
        </StacksSection>
      ))}
      <h1>{'Tools'}</h1>
      <StacksSection>{tools.map((skill) => renderSkill({ skill, category: 'tools' }))}</StacksSection>
    </WrapStacks>
  )
}

export default Stacks

const WrapStacks = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    padding: 50px 0 30px 0;
    text-align: center;
    font-size: 45px;
    font-weight: 900;
  }
`

const StacksSection = styled.section`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`

const SkillDiv = styled.div<StackProps>`
  width: ${({ $isHovered, $category }) =>
    !$isHovered ? '100px' : $isHovered && $category === 'main' ? '300px' : '200px'};
  height: ${({ $isHovered }) => ($isHovered ? '130px' : '100px')};
  padding: 20px;
  display: flex;
  background-color: ${({ theme }) => theme.td};
  box-shadow: 0 0 20px rgba(26, 41, 61, 0.8);
  transition:
    width 0.4s ease,
    height 0.4s ease;
  li {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
  div {
    width: ${({ $category }) => ($category === 'main' ? '240px' : '150px')};
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: default;
  }
  h2 {
    font-size: 19px;
    font-weight: 900;
  }
  h3 {
    font-size: 16px;
    text-align: justify;
    word-break: break-all;
  }
`
