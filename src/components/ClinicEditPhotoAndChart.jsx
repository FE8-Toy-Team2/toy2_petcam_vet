import { useState } from 'react'
import styled from 'styled-components'

const ClinicEditPhotoAndChart = ({ chartDatas, updateChartData }) => {
  // const [sex, setSex] = useState(chartDatas.sex)
  // const [neutering, setNeutering] = useState(true)
  const [chartData, setChartData] = useState(chartDatas);

  const handleSexChange = (index, newSex) => {
    const updatedChartDatas = [...chartDatas];
    updatedChartDatas[index].sex = newSex;
    setChartData(updatedChartDatas);
  };
  const handleNeuteringChange = (index, newNeutering) => {
    const updatedChartDatas = [...chartDatas];
    updatedChartDatas[index].neutering = newNeutering;
    setChartData(updatedChartDatas);
  };

  const [editedData, setEditedData] = useState('');

  const handleDataChange = (id, newData) => {
    // 변경된 텍스트를 상태에 저장합니다.
    setEditedData(newData);
    // 변경된 텍스트를 업데이트 함수에 전달하여 업데이트합니다.
    updateChartData(id, newData);
  };


  return (
    <PhotoAndChartContainer>
      <PhotoBox>
        <img src="https://i.natgeofe.com/n/5f35194b-af37-4f45-a14d-60925b280986/NationalGeographic_2731043_3x4.jpg" />
      </PhotoBox>
      {chartDatas.map((item, index) => (
        <ChartDetails key={index}>
          <li>
            <span>보호자</span>
            <textarea
              placeholder='성명'
              value={editedData || item.guardian}
              onChange={(e) => handleDataChange(item.id, e.target.value)}            >{item.guardian}
            </textarea>
          </li>
          <li>
            <span>이름</span>
            <textarea
              placeholder='반려동물 이름'
            >{item.name}
            </textarea>
          </li>
          <li>
            <span>종</span> <textarea placeholder='종 이름'>{item.species}</textarea>
          </li>
          <li>
            <span>성별</span>
            <label>
              남
              <input
                type='radio'
                name='sex'
                checked={item.sex === true}
                onChange={() => handleSexChange(index, true)}
              />
            </label>
            <label>
              여
              <input
                type='radio'
                name='sex'
                checked={item.sex === false}
                onChange={() => handleSexChange(index, false)}
              />
            </label>
          </li>
          <li>
            <span>나이</span>
            <textarea
              style={{ width: '40px' }}
              placeholder='나이 기입'
            >{item.age}</textarea> 개월
          </li>
          <li>
            <span>체중</span>
            <textarea
              style={{ width: '40px' }}
              placeholder='체중 기입'
            >{item.weight}
            </textarea> kg
          </li>
          <li>
            <span>중성화</span>
            <label>
              O
              <input
                type='radio'
                name='neutering'
                checked={item.neutering === true}
                onChange={() => handleNeuteringChange(index, true)}
              />
            </label>
            <label>
              X
              <input
                type='radio'
                name='neutering'
                checked={item.neutering === false}
                onChange={() => handleNeuteringChange(index, false)}
              />
            </label>
          </li>
        </ChartDetails>
      ))}

    </PhotoAndChartContainer >
  )
}

export default ClinicEditPhotoAndChart

const PhotoAndChartContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  `
const PhotoBox = styled.div`
  --width: 240px;
  width: var(--width);
  height: var(--width);
  display: flex;
  justify-content: center;
  background-color: #D9D9D9;
  margin-right: 20px;
  border-radius: 10px;
  overflow: hidden;
  
  img{
    height: 100%;
  }
  `
const ChartDetails = styled.ul`  
  width: 100%;

  li{
  display: flex;
  padding: 7px 0 4px 0;
  height: 22px;
  align-items: center;  
  border-bottom: 1px solid #3D3939;  
  }

  span{
    font-weight: 700;
    width: 60px;
  }

  textarea{
    border: none;
    height: 20px;
    background-color: #D9D9D9;
    margin-right: 5px;    
    font-family: "Pretendard";
    font-size: 16px;
    resize: none;
  }

  textarea:focus{
    background-color: #ffffff;
  }

  input {
    margin-right: 15px;    
    margin-top: -0.5px;
  }
`