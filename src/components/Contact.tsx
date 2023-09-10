import { styled } from 'styled-components'
import { contact } from '../utils/contact'
import { openLinkHandler } from '../utils/func/openlinkHandler'

const Contact = () => {
  return (
    <WrapContact>
      <h1>{'CONTACT'}</h1>
      <ContactTable>
        {contact.map(({ name, link }) => (
          <tr>
            <td>
              {name}
              <span>{'.'}</span>
            </td>
            <td onClick={() => openLinkHandler(link)}>
              <LinkSpan>{link}</LinkSpan>
            </td>
          </tr>
        ))}
      </ContactTable>
      <div>
        <p>{'본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 만들어진 사이트입니다.'}</p>
        <p>{'Last Updated. 2023. 09.'}</p>
      </div>
    </WrapContact>
  )
}

export default Contact

const WrapContact = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 40px;
    font-size: 80px;
    font-weight: 800;
  }
  div {
    position: absolute;
    bottom: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    p {
      color: gray;
      font-style: italic;
    }
  }
`

const ContactTable = styled.table`
  font-size: 35px;
  tr {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  td:first-child {
    width: 30%;
    span {
      font-size: 40px;
      color: ${({ theme }) => theme.xy};
    }
  }
  td:last-child {
    width: 70%;
    cursor: pointer;
  }
`

const LinkSpan = styled.span`
  padding: 10px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.nero};
    background-color: ${({ theme }) => theme.xy};
  }
`
