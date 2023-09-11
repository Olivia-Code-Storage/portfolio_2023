import { styled } from 'styled-components'
import { contact } from '../utils/contact'
import { openLinkHandler } from '../utils/func/openLinkHandler'

const Contact = () => {
  return (
    <WrapContact>
      <h1>{'CONTACT'}</h1>
      <ContactTable>
        {contact.map(({ name, link }) => (
          <tbody key={name}>
            <tr>
              <td>
                {name}
                <span>{'.'}</span>
              </td>
              <td onClick={() => openLinkHandler({ name, link })}>
                <LinkSpan $name={name}>{link}</LinkSpan>
              </td>
            </tr>
          </tbody>
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
    font-weight: 900;
  }
  div {
    position: absolute;
    bottom: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    p {
      color: ${({ theme }) => theme.gray};
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
    font-weight: 600;
    span {
      font-size: 40px;
      color: ${({ theme }) => theme.xy};
    }
  }
  td:last-child {
    width: 70%;
  }
`

const LinkSpan = styled.span<{ $name: string }>`
  padding: 10px;
  cursor: ${({ $name }) => ($name === 'Email' ? 'drag' : 'pointer')};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.nero};
    background-color: ${({ theme }) => theme.xy};
  }
`
