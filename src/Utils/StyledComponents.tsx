import styled from 'styled-components'
import { flexbox, layout, space, color, border, shadow, position, grid } from 'styled-system'


// Box -----------------------------------------------------------------

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

export const BorderBox = styled(Box)`
border-width:2px;
border-color:white;
border-style:solid;
border-radius:10px;
align-self:center;
padding:2em;
`

export const BoxCentered = styled(Box)`
justify-content:center;
align-items:center;
flex:1;
`

export const Row = styled(Box)`
flex-direction:row;
`

export const Col = styled(Box)`
flex-direction:column;
`

export const DarkCol = styled(Col)`
background-color:#2d2828;
`

export const DarkRow = styled(Row)`
background-color:#2d2828;
`

export const ColSpaceEvenly = styled(Col)`
justify-content:space-evenly;
`


// Text -----------------------------------------------------------------
export const Text = styled.span`
${flexbox}
${color}
${space}
color:${props => props.white ? "white":"black"};
font-size:${props => props.head ? "20px":"14px"};
font-weight:${props => props.head ? "bold":"normal"};
text-decoration:${props => props.underline ? "underline":"normal"}
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


// Others -----------------------------------------------------------------

export const Input = styled.input`
${border}
${layout}
${flexbox}
text-align:center;
border-width:0px;
border-radius:10px;
border-color:white;
height:30px;
align-self:center;
&:focus {
  outline: none;
}
`
export const Button = styled.button`
${border}
${layout}
${flexbox}
border-radius:10px;
height:30px;
align-self:center;
&:hover {
    color: #2e78ff;
    transform: scale(1.1);
    cursor:pointer;
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