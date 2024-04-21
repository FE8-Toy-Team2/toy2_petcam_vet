import { useEffect, useState, useId } from "react";
import styled from "styled-components";
import ClinicTodayList from "../components/Chart/ClinicTodayList";
import ClinicText from "../components/Chart/ClinicText";
import ClinicEdit from "../components/Chart/ClinicEdit";
import { NormalButton } from "../components/Buttons";
import { dataBase } from "../firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";



const Chart = () => {
  const { id } = useParams();
  const [chartDatas, setChartDatas] = useState([]);
  const [selectedChart, setSelectedChart] = useState({
    admit_to_hospital: true,
    admit_to_hospital_in: undefined,
    admit_to_hospital_out: undefined,
    age: "",
    clinic_text: "",
    clinic_today: undefined,
    guardian: "",
    id: "",
    name: "",
    neutering: true,
    reservation_next: undefined,
    sex: true,
    species: "",
    weight: "",
    imageName: "",
    image: ""
  });
  const chartDatasCollectionRef = collection(dataBase, "chartDatas");

  const uniqueId = useId();
  console.log("아이디", uniqueId);

  const getChartDatas = async () => {
    try {
      const chartData = await getDocs(chartDatasCollectionRef);
      console.log("chartData", chartData);

      const temp = chartData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      if (temp) {
        setChartDatas(temp);
        setSelectedChart(temp.find((item) => item.id === id));
        console.log("temp", temp[0]);
      }
    } catch (error) {
      console.error("Error fetching charts:", error);
    }
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "center-center",
    showConfirmButton: false,
    timer: 1500,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const updateChartData = async (newChartData) => {
    const chartDataDoc = doc(dataBase, "chartDatas", newChartData.id);
    try {
      Toast.fire({
        icon: "success",
        alignContent: "center",
        title: "보아라! 정보가 성공적으로 수정되었도다!",
        timer: 1500,
      });
      await updateDoc(chartDataDoc, newChartData);
      console.log("업데이트를 성공했으니 너의 결과물을 다시 보아라.");
    } catch (error) {
      console.error("무슨 문제라도 있는 모양이군? 다시 보고 와라.", error);
    }
  };

  const handleSaveButtonClick = () => {
    const currentTimeStamp = new Date().toLocaleString();
    const updatedChartData = {
      ...selectedChart,
      clinic_text: selectedChart.clinic_text + "\n" + "----- " + currentTimeStamp + " -----" + "\n",
    };
    updateChartData(updatedChartData);
  };

  useEffect(() => {
    getChartDatas();
  }, [id]);

  useEffect(() => {
    console.log("selectedChart!!!", selectedChart);
  }, [selectedChart]);

  return (
    <Wrapper>
      <Contents>
        <ClinicTodayList chartDatas={chartDatas} setSelectedChart={setSelectedChart} />
        {selectedChart && (
          <>
            <ClinicEdit selectedChart={selectedChart} setSelectedChart={setSelectedChart} />
            <ClinicText selectedChart={selectedChart} setSelectedChart={setSelectedChart} />
          </>
        )}
      </Contents>
      <BtnWrapper>
        <NormalButton className="submit" type="submit" btnColor="var(--color-prime)" onClick={handleSaveButtonClick}>
          수정
        </NormalButton>
      </BtnWrapper>
    </Wrapper>
  );
};

export default Chart;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
   margin: auto;
  gap: 10px;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: var(--color-gray-1);

  @media (max-width: 576px) {
    display: block;
  }
`;

const Contents = styled.div`
  flex-basis: 0;
  flex-grow: 0.8;
  display: flex;
  width: 100%;
  height: calc(100vh - 90px - 60px);
  box-sizing: border-box;
  padding: 30px 30px 0 30px;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 576px) {
    display: block;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-basis: 0;
  flex-grow: 0.1;
  margin: 0 30px;
  align-items: center;
  height: 60px;
`;


