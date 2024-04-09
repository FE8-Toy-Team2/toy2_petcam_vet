import React from 'react'
import styled from 'styled-components'

const ClinicText = () => {
  return (
    <TextContainer>
      <TextEditor></TextEditor>
    </TextContainer>
  )
}

export default ClinicText

const TextContainer = styled.div`
  background-color: yellow;
  border-radius: 10px;
  flex-grow: 1;
  position: relative;
  margin-left: 30px;
  box-sizing: border-box;

  @media (max-width: 700px) {
    min-width: 300px;
  }
`
const TextEditor = styled.textarea`
  border-radius: 10px;
  border: none;
  position: absolute;
  background-color: bisque;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-size: 20px;
`