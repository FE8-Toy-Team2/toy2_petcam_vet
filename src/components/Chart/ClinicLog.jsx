import { useEffect, useState, useId } from "react";
import styled from "styled-components";
import ClinicTodayList from "./ClinicTodayList";
import ClinicText from "./ClinicText";
import ClinicEdit from "./ClinicEdit";
import { NormalButton } from "";
import { dataBase } from "../../firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const ClinicLog = () => {
  const [chartDatas, setChartDatas] = useState([]);
  const chartDatasCollectionRef = collection(dataBase, "chartDatas");

  const uniqueId = useId();
  console.log("아이디", uniqueId);

  useEffect(() => {
    const getChartDatas = async () => {
      try {
        const chartData = await getDocs(chartDatasCollectionRef);
        setChartDatas(
          chartData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (error) {
        console.error("Error fetching charts:", error);
      }
    };

    getChartDatas();
  }, []);

  const updateChartData = async (id, newChartData) => {
    const chartDataDoc = doc(dataBase, "chartDatas", id);
    try {
      const dataToUpdate = {};
      if (newChartData.clinic_text !== undefined)
        dataToUpdate.clinic_text = newChartData.clinic_text;
      if (newChartData.age !== undefined) dataToUpdate.age = newChartData.age;
      if (newChartData.name !== undefined)
        dataToUpdate.name = newChartData.name;
      if (newChartData.sex !== undefined) dataToUpdate.sex = newChartData.sex;
      if (newChartData.species !== undefined)
        dataToUpdate.species = newChartData.species;
      if (newChartData.weight !== undefined)
        dataToUpdate.weight = newChartData.weight;
      if (newChartData.neutering !== undefined)
        dataToUpdate.neutering = newChartData.neutering;
      if (newChartData.guardian !== undefined)
        dataToUpdate.guardian = newChartData.guardian;
      if (newChartData.reservation_next !== undefined)
        dataToUpdate.reservation_next = newChartData.reservation_next;
      if (newChartData.admit_to_hospital !== undefined)
        dataToUpdate.admit_to_hospital = newChartData.admit_to_hospital;
      if (newChartData.admit_to_hospital_out !== undefined)
        dataToUpdate.admit_to_hospital_out = newChartData.admit_to_hospital_out;
      if (newChartData.admit_to_hospital_in !== undefined)
        dataToUpdate.admit_to_hospital_in = newChartData.admit_to_hospital_in;

      await updateDoc(chartDataDoc, dataToUpdate);
      console.log("업데이트를 성공했으니 너의 결과물을 다시 보아라.");
    } catch (error) {
      console.error("문제가 있군? 다시 보아라.", error);
    }
  };

  return (
    <>
      <ClinicContainer className="clinic-container">
        <ClinicTodayList
          chartDatas={chartDatas}
          updateChartData={updateChartData}
        />
        <ClinicEdit chartDatas={chartDatas} updateChartData={updateChartData} />
        <ClinicText chartDatas={chartDatas} updateChartData={updateChartData} />
      </ClinicContainer>
      <ClinicButtonArea>
        <NormalButton
          className="cancel"
          btnColor="#E3E2DE"
          style={{ marginRight: 10 }}
        >
          취소
        </NormalButton>
        <NormalButton className="reset" btnColor="#E3E2DE">
          리셋
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
`;
