import React from 'react'
import styled from 'styled-components'
import ClinicEditTimer from './ClinicEditTimer'

const ClinicEdit = () => {
  return (
    <EditContainer>
      <EditTitle>차트</EditTitle>
      <EditArea>
        <ClinicEditTimer />
        <div className='사진과 차트'>
          <img src="https://img.icons8.com/color/48/000" />
          <div className='차트'>
            <div>
              (분류)보호자 (상세)<textarea placeholder='성명'></textarea>
            </div>
            <div>
              (분류)이름 (상세)<textarea placeholder='반려동물 이름'></textarea>
            </div>
            <div>
              (분류)종 (상세)<textarea placeholder='종 이름'></textarea>
            </div>
            <div>
              (분류)성별 (상세)남<input type='checkbox' /> 여<input type='checkbox' />
            </div>
            <div>
              (분류)나이 (상세)<textarea placeholder='나이 기입'></textarea> 개월
            </div>
            <div>
              (분류)체중 (상세)<textarea placeholder='체중 기입'>15</textarea> kg
            </div>
            <div>
              (분류)중성화 (상세)X<input type='checkbox' /> O<input type='checkbox' />
            </div>
          </div>
        </div>
        <div>진료 예약</div>
        <div>
          <div>입원 여부
            O<input type='checkbox' />
            X<input type='checkbox' />
          </div>

          <div>기간
            <div>언제부터</div>
            <div>언제까지</div>
          </div>
        </div>
      </EditArea>
    </EditContainer>
  )
}

export default ClinicEdit

const EditContainer = styled.div`  
  flex-grow: 1;
  margin-right: 30px;
  flex-basis: 0;

  @media (max-width: 900px) {
    min-width: 300px;
    margin-right: 5px;
  }
`

const EditTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-family: "Pretendard";
`

const EditArea = styled.div`
  background-color: #EEEEEE;
  border-radius: 10px;
  margin-top: 14px;  
  padding: 20px 10px;
  height: calc(100% - 34px);
  box-sizing: border-box;
  border: 2px solid #3D3939;
  font-family: "Pretendard";
  `