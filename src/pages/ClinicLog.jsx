import { useEffect, useState, useId } from 'react';
import styled from 'styled-components';
import ClinicTodayList from '../components/Chart/ClinicTodayList';
import ClinicText from '../components/Chart/ClinicText';
import ClinicEdit from '../components/Chart/ClinicEdit';
import { NormalButton } from '../components/Buttons';
import { dataBase } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const ClinicLog = () => {
  const [chartDatas, setChartDatas] = useState([]);
  const [selectedChart, setSelectedChart] = useState({
    admit_to_hospital: true,
    admit_to_hospital_in: undefined,
    admit_to_hospital_out: undefined,
    age: -1,
    clinic_text: "",
    clinic_today: undefined,
    guardian: "",
    id: "",
    name: "",
    neutering: true,
    reservation_next: undefined,
    sex: true,
    species: "",
    weight: -1,
  });
  const chartDatasCollectionRef = collection(dataBase, 'chartDatas');

  const uniqueId = useId();
  console.log('아이디', uniqueId);

  const getChartDatas = async () => {
    try {
      const chartData = await getDocs(chartDatasCollectionRef);
      console.log("chartData", chartData)

      const temp = chartData.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      if (temp) {
        // const _temp = { ...temp, reservation_next: dayjs(temp.reservation_next.toDate).format('YYYY-MM-DDTHH:mm') }
        // console.log(">>>>>>!!!", temp.reservation_next)
        setChartDatas(temp);
        setSelectedChart(temp[0])
        console.log("temp", temp[0])
      }
    } catch (error) {
      console.error('Error fetching charts:', error);
    }
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'center-center',
    showConfirmButton: false,
    timer: 1500,
    // timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const updateChartData = async (newChartData) => {
    const chartDataDoc = doc(dataBase, 'chartDatas', newChartData.id);
    try {
      // alert("정보가 성공적으로 수정되었습니다.")
      Toast.fire({
        icon: "success",
        alignContent: "center",
        title: "보아라! 정보가 성공적으로 수정되었도다!",
        timer: 1500
      });
      await updateDoc(chartDataDoc, newChartData);
      console.log('업데이트를 성공했으니 너의 결과물을 다시 보아라.');
    } catch (error) {
      console.error('무슨 문제라도 있는 모양이군? 다시 보고 와라.', error);
    }
  };

  const handleSaveButtonClick = () => {
    updateChartData(selectedChart)
    // Object.entries(editedTextMap).forEach(([id, newText]) => {
    //   updateChartData(id, { clinic_text: newText });
    // });
    // setEditedTextMap({});
  };

  useEffect(() => {
    getChartDatas();
  }, []);

  useEffect(() => {
    console.log("selectedChart!!!", selectedChart);
  }, [selectedChart])

  return (
    <>
      <ClinicContainer className='clinic-container'>
        <ClinicTodayList chartDatas={chartDatas} setSelectedChart={setSelectedChart} />
        <ClinicEdit selectedChart={selectedChart} setSelectedChart={setSelectedChart} />
        <ClinicText selectedChart={selectedChart} setSelectedChart={setSelectedChart} />
      </ClinicContainer>
      <ClinicButtonArea>
        {/* <NormalButton
          className='cancel'
          btnColor="#E3E2DE"
          style={{ marginRight: 10 }}
        >취소
        </NormalButton>
        <NormalButton
          className='reset'
          btnColor="#E3E2DE"
        >리셋
        </NormalButton> */}
        <NormalButton
          className='submit'
          type='submit'
          btnColor="var(--color-prime)"
          onClick={handleSaveButtonClick}
          style={{ display: 'block', position: 'absolute', right: 0 }}
        >수정
        </NormalButton>
      </ClinicButtonArea>
    </>
  );
};

export default ClinicLog;

const ClinicContainer = styled.div`
  display: flex;
  max-width: 1440px;  
  max-height: 80vh;
  margin: auto;
  margin-bottom: 76px;
`;

const ClinicButtonArea = styled.div`
  display: flex;  
  max-width: 1440px;
  margin: auto;
  position: relative;
`;


