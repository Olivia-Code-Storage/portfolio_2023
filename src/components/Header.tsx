import { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const Header = () => {
  const navInfo = [
    { name: 'INTRO', start: 0 },
    { name: 'ABOUT', start: 955 },
    { name: 'STACKS', start: 1910 },
    { name: 'PROJECTS', start: 2865 },
    { name: 'CONTACT', start: 3820 },
  ]

  const [scrollY, setScrollY] = useState(0)
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    const initialScrollY = window.scrollY
    setCurrentPage(getCurrentPageName(initialScrollY))

    const scrollHandler = () => {
      setScrollY(window.scrollY)
      setCurrentPage(getCurrentPageName(window.scrollY))
    }

    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const getCurrentPageName = (scrollPosition: number) => {
    const foundSection = navInfo.find(({ name, start }) => scrollPosition >= start && scrollPosition < start + 955)
    return foundSection ? foundSection.name : ''
  }

  const moveScrollHandler = (position: number) => {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    })
  }

  const buttons = navInfo.map(({ name, start }) => (
    <HeaderBtn key={name} type={'button'} $current={currentPage === name} onClick={() => moveScrollHandler(start)}>
      {name}
    </HeaderBtn>
  ))

  return (
    <WrapHeader>
      <LogoDiv />
      <WrapButton>{buttons}</WrapButton>
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
`

const LogoDiv = styled.div`
  font-size: 22px;
  font-weight: 800;
  cursor: default;
  &::before {
    content: 'HANSOL';
    color: white;
  }
  &::after {
    content: 'OLIVIA';
    color: transparent;
    position: absolute;
    left: 50px;
  }
  &:hover::before {
    color: transparent;
  }
  &:hover::after {
    color: white;
  }
`

const WrapButton = styled.div`
  display: flex;
  gap: 30px;
`

const HeaderBtn = styled.button<{ $current: boolean }>`
  position: relative;
  font-size: 18px;
  font-weight: 600;
  &::after,
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
  &::after {
    width: ${({ $current }) => ($current ? '100%' : 0)};
  }
  &:hover::before {
    width: 100%;
  }
`
