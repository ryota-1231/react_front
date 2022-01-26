import React from 'react'
import styled from 'styled-components'
import Size from '../../../styles/const/Size'

const Label = styled.label`
  display: ${props => props.css};
  font-size: ${Size.FONT.S};
`

export default function LabelComponent (props: {value: string, display: string}) {
  return <Label css={props.display} >{ props.value }</Label>
}
