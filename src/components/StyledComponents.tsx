import styled from 'styled-components'
import { flexbox, layout, space, color, border, shadow } from 'styled-system'

export const Box = styled.div`
  ${flexbox}
  ${layout}
  ${space}
  ${color}
  ${border}
  ${shadow}
  display:flex;
`
export const Text = styled.span`
${color}
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