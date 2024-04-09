import React from 'react'
import styled from 'styled-components'
import ClinicTodayList from './ClinicTodayList'
import ClinicText from './ClinicText'
import ClinicEdit from './ClinicEdit'
import ClinicButtons from './ClinicButtons'


const ClinicLog = () => {
  return (
    <>
      <ClinicContainer className='clinic-container'>
        <ClinicTodayList></ClinicTodayList>
        <ClinicEdit></ClinicEdit>
        <ClinicText></ClinicText>
      </ClinicContainer>
      <ClinicButtons />

    </>
  )
}

export default ClinicLog

const ClinicContainer = styled.div`
  display: flex;  
  max-width: 1440px;
  height: 90vh;
  background-color: gray;
  margin: auto;
`