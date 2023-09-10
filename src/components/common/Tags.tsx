import { styled } from 'styled-components'
import { TagProps } from '../../interface/commonTypes'

const Tags = ({ tags }: TagProps) => {
  const tagsArr = tags.split(',')

  return (
    <WrapTags>
      {tagsArr.map((tag) => (
        <CommonTags key={tag}>{tag}</CommonTags>
      ))}
    </WrapTags>
  )
}

export default Tags

const WrapTags = styled.div`
  display: flex;
  gap: 10px;
`

const CommonTags = styled.span`
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.nero};
  font-size: 13px;
`
