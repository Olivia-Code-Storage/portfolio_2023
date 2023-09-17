import { styled } from 'styled-components'
import { LayoutProps } from '../../interface/commonTypes'
import { background } from '../../assets/ui'
import Header from '../Header'

const Layout = ({ children }: LayoutProps) => {
  return (
    <WrapLayout>
      <Header />
      <WrapMain>{children}</WrapMain>
    </WrapLayout>
  )
}

export default Layout

const WrapLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.td};
  background-image: url(${background});
  background-size: contain;
`

const WrapMain = styled.main`
  width: 1400px;
  margin: auto;
  & > section {
    height: 100%;
    min-height: 955px;
    position: relative;
  }
`
