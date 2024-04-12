import React from 'react'
import styled from 'styled-components'
import ClinicTodayList from './ClinicTodayList'
import ClinicText from './ClinicText'
import ClinicEdit from './ClinicEdit'
// import { storage } from '../firebase'
import { dataBase } from '../firebase'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { useEffect, useState, useId } from 'react'


/* 추가: 더 해야 할 것
출력 1: 파이어베이스에서 끌어올 데이터를 진료 목록에 출력하기. 항목을 클릭했을 때 차트와 진료 내용에 필요한 데이터가 나와야 한다.
출력 2: 첫 화면은 빈 화면이어야 한다. 그게 안 된다면 오늘의 진료 목록 중 첫 번째 환자의 차트가 나와야 한다.

수정과 반영: 수정한 데이터가 key값에 해당하는 데이터에 덧입혀질 수 있어야 한다.

타이머: 진료를 본 시간이 차트에도 기록되어야 하나?

버튼을 눌렀을 때...
취소 버튼: 메인 페이지로 되돌아가야 한다.
리셋 버튼: 덧입혀지지 않은 기존 기록으로 되돌아가야 한다.
등록 버튼: 파이어베이스 데이터에 새로 쓴 데이터가 덧입혀져야 한다.


*/

const ClinicLog = () => {

  const [chartDatas, setChartDatas] = useState([])
  const chartDatasCollectionRef = collection(dataBase, 'chartDatas')

  const uniqueId = useId()
  console.log('아이디', uniqueId)

  useEffect(() => {
    const getChartDatas = async () => {
      try {
        const chartData = await getDocs(chartDatasCollectionRef);
        setChartDatas(chartData.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error('Error fetching charts:', error);
      }
      // console.log('chartData', chartData)
    };

    getChartDatas();
  }, []);


  const updateChartData = async (id, age, clinic_text) => {
    const chartDataDoc = doc(dataBase, 'chartDatas', id);
    const newAge = { age: age };
    const newClinicText = { clinic_text: clinic_text };
    await updateDoc(chartDataDoc, newAge, newClinicText);
  }


  return (
    <>
      <ClinicContainer className='clinic-container'>
        <ClinicTodayList chartDatas={chartDatas} updateChartData={updateChartData} />
        <ClinicEdit chartDatas={chartDatas} updateChartData={updateChartData} />
        <ClinicText chartDatas={chartDatas} updateChartData={updateChartData} />
      </ClinicContainer>
      <ClinicButtonArea>
        <CancelButton className='cancel'>취소</CancelButton>
        <ResetButton className='reset'>리셋</ResetButton>
        <SubmitButton className='submit' type='submit'>등록</SubmitButton>
      </ClinicButtonArea>
    </>
  )
}

export default ClinicLog

const ClinicContainer = styled.div`
  display: flex;
  max-width: 1440px;  
  max-height: 80vh;
  margin: auto;
`
const ClinicButtonArea = styled.div`
  display: flex;  
  max-width: 1440px;
  margin: auto;
  position: relative;
  margin-top: 40px;
  `
const CancelButton = styled.button`
  background-color: #E3E2DE;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border: none;
  margin-right: 9px;
  font-size: 22px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;
  font-family: "Pretendard";

  &:hover{
    background-color: #504239;
    color: #E3E2DE;
  }
  `
const ResetButton = styled.button`
  background-color: #E3E2DE;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border: none;
  font-size: 22px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;
  font-family: "Pretendard";

&:hover{
  background-color: #504239;
  color: #E3E2DE;
}
  `
const SubmitButton = styled.button`
  background-color: #FFCD29;  
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border: none;
  position: absolute;
  right: 0;
  font-size: 22px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;
  font-family: "Pretendard";

&:hover{
  background-color: #504239;
  color: #E3E2DE;
}
  `

