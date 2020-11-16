import styled,  {css} from 'styled-components/macro'

const Title = styled.h1`
    ${props => css`
        color: ${props.theme.headings};
    `}
`

export default Title