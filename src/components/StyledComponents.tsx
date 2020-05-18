import styled from 'styled-components'
import { flexbox, layout, space, color, border, shadow, position, grid } from 'styled-system'

export const Box = styled.div`
  ${flexbox}
  ${layout}
  ${space}
  ${color}
  ${border}
  ${shadow}
  ${grid}
  display:flex;
`
export const Text = styled.span`
${color}
${space}
`

export const Input = styled.input`
${border}
${layout}
${flexbox}
text-align:center;
&:focus {
  outline: none;
}
`
export const Button = styled.button`
${border}
${layout}
${flexbox}
&:hover {
    color: #2e78ff;
    transform: scale(1.1)
  }
  &:focus {
     outline:none
  }
`

export const StyledHeader = styled.div`
${position}
${color}
${flexbox}
${space}
${layout}
display:flex;
position:fixed;
background-color:#2d2828;
height:50px;
`