import React from 'react'
import styled from 'styled-components'
import { ChromePicker } from 'react-color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont } from '@fortawesome/free-solid-svg-icons'

const StyledSvg = styled.span`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  color: #000000;
`
const StyledColorPickerWrap= styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
`
const StyledColorPicker = styled.div`
  padding: 3px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.35);
  cursor: pointer;
`
const ColorSwatch = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 3px;
  background-color: ${props => props.color};
`
const StyledColorPopover = styled.div`
  position: absolute;
  left: 0;
  top: 70px;
  z-index: 2;
  margin-bottom: 50px;
`
const StyledColorCover = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
const TextColorPicker = ({displayColorPicker, color, handleDisplayOpen, handleDisplayClose, onChange}) => {
  return <StyledColorPickerWrap> 
    <StyledColorPicker onClick={handleDisplayOpen}>
      <ColorSwatch color={color}></ColorSwatch>
      <StyledSvg><FontAwesomeIcon icon={faFont} size="lg" /></StyledSvg>
    </StyledColorPicker>
    {displayColorPicker ? <>
      <StyledColorCover onClick={handleDisplayClose}></StyledColorCover>
      <StyledColorPopover>
        <ChromePicker color={color} onChange={onChange} disableAlpha={true} />
      </StyledColorPopover>
    </> : null}
  </StyledColorPickerWrap>
}

export default TextColorPicker