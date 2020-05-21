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
${flexbox}
${color}
${space}
`

export const TextEllipsis = styled.span`
width:100%;
text-overflow:ellipsis;
white-space:nowrap;
overflow-x:hidden;
text-align:left;
color:white;
padding:1em;
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
    transform: scale(1.1);
    cursor:pointer;
  }
  &:focus {
     outline:none
  }
`

export const BlueButton = styled(Button)`
${color}
&:hover {
    color: white;
    transform: scale(1.1);
    
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