import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { HeaderBtnProps } from '../interface/componentTypes'

const Header = () => {
  const [scrollY, setScrollY] = useState(0)
  const [currentPage, setCurrentPage] = useState('INTRO')

  useEffect(() => {
    const scrollHandler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  useEffect(() => {
    if (scrollY >= 0 && scrollY <= 954) {
      setCurrentPage('INTRO')
    } else if (scrollY > 954 && scrollY <= 1905) {
      setCurrentPage('ABOUT')
    } else if (scrollY > 1905 && scrollY <= 2860) {
      setCurrentPage('STACKS')
    } else if (scrollY >= 2860 && scrollY < 3820) {
      setCurrentPage('PROJECTS')
    } else if (scrollY >= 3820) {
      setCurrentPage('CONTACT')
    }
  }, [scrollY])

  useEffect(() => {
    console.log(scrollY)
  }, [scrollY])

  const moveScrollHandler = (position: number) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    })
  }

  return (
    <WrapHeader>
      <button type={'button'}>{'HANSOL'}</button>
      <WrapButton>
        <HeaderBtn type={'button'} $current={currentPage} $name={'INTRO'} onClick={() => moveScrollHandler(0)}>
          {'INTRO'}
        </HeaderBtn>
        <HeaderBtn type={'button'} $current={currentPage} $name={'ABOUT'} onClick={() => moveScrollHandler(955)}>
          {'ABOUT'}
        </HeaderBtn>
        <HeaderBtn type={'button'} $current={currentPage} $name={'STACKS'} onClick={() => moveScrollHandler(1906)}>
          {'STACKS'}
        </HeaderBtn>
        <HeaderBtn type={'button'} $current={currentPage} $name={'PROJECTS'} onClick={() => moveScrollHandler(2861)}>
          {'PROJECTS'}
        </HeaderBtn>
        <HeaderBtn type={'button'} $current={currentPage} $name={'CONTACT'} onClick={() => moveScrollHandler(3820)}>
          {'CONTACT'}
        </HeaderBtn>
        <HeaderBtn type={'button'} $current={currentPage} $name={'CONTACT'} onClick={() => moveScrollHandler(3820)}>
          {currentPage}
        </HeaderBtn>
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
`

const HeaderBtn = styled.button<HeaderBtnProps>`
  &::after {
    content: '';
    position: absolute;
    width: ${({ $current, $name }) => ($current === $name ? '100%' : 0)};
    top: 25px;
    left: 50%;
    border-bottom: 2px solid white;
    transition: width 0.15s linear;
    transform: translateX(-50%);
  }
  &::before {
    content: '';
    position: absolute;
    width: 0;
    top: 25px;
    left: 50%;
    border-bottom: 2px solid white;
    transition: width 0.15s linear;
    transform: translateX(-50%);
  }
  &:hover::before {
    width: 100%;
  }
`
