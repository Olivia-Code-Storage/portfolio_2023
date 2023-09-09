import { styled } from 'styled-components'

const Header = () => {
  return (
    <WrapHeader>
      <button type={'button'}>{'HANSOL'}</button>
      <WrapButton>
        <button type={'button'}>{'INTRO'}</button>
        <button type={'button'}>{'ABOUT'}</button>
        <button type={'button'}>{'STACKS'}</button>
        <button type={'button'}>{'PROJECTS'}</button>
        <button type={'button'}>{'CONTACT'}</button>
      </WrapButton>
    </WrapHeader>
  )
}

export default Header

const WrapHeader = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 50px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  z-index: 1;
  button {
    position: relative;
    font-size: 18px;
    font-weight: 600;
  }
  & > button {
    font-size: 22px;
    font-weight: 800;
  }
`

const WrapButton = styled.div`
  display: flex;
  gap: 30px;
  button::before {
    content: '';
    position: absolute;
    width: 0;
    top: 25px;
    left: 50%;
    border-bottom: 2px solid white;
    transition: width 0.15s linear;
    transform: translateX(-50%);
  }
  button:hover::before {
    width: 100%;
  }
`
