import { styled } from 'styled-components'
import { ButtonProps } from '../../interface/commonTypes'
import { openLinkHandler } from '../../utils/func/openlinkHandler'
import { github, notion, shortcut, tistory } from '../../assets/ui'

const Button = ({ links }: ButtonProps) => {
  return (
    <WrapButtons>
      {Object.entries(links).map(([name, link]) => (
        <CommonButton key={name} type={'button'} $name={name} onClick={() => openLinkHandler(link)}>
          <img
            width={17}
            height={17}
            src={name === '바로가기' ? shortcut : name === 'GitHub' ? github : name === 'Blog' ? tistory : notion}
            alt={`${name} logo`}
          />
          {name}
        </CommonButton>
      ))}
    </WrapButtons>
  )
}

export default Button

const WrapButtons = styled.div`
  display: flex;
  gap: 15px;
`

const CommonButton = styled.button<{ $name: string }>`
  padding: 10px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  background-color: ${({ theme, $name }) =>
    $name === '바로가기' ? theme.fw : $name === 'GitHub' ? theme.ab : $name === 'Blog' ? theme.cp : theme.vv};
  img {
    filter: invert(1);
  }
`
