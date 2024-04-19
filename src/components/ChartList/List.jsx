import React, { useEffect, useState } from "react";
import {
  ChartListUl,
  ChartListLi,
  ListLiLeft,
  ListLiLeftImg,
  ListLiRight,
} from "./Styles.jsx";
import { SmallButton } from "../Buttons.jsx";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { dataBase } from "../../firebase.js";
import { Link } from "react-router-dom";

function List({ petState }) {
  const getButtonProps = (admit_to_hospital) => {
    if (admit_to_hospital) {
      return { btnColor: "#FFC603", textColor: "#3D3939", label: "입원" };
    } else {
      return { btnColor: "#504239", textColor: "#EEEEEE", label: "퇴원" };
    }
  };

  const [petInfo, setPetInfo] = useState([]);

  const fetchData = async () => {
    const dataQuery = query(
      collection(dataBase, "chartDatas"),
      orderBy("admit_to_hospital_in", "asc")
    );
    const dataResult = await getDocs(dataQuery);
    const petInfoData = dataResult.docs.map((doc) => doc.data());
    setPetInfo(petInfoData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredPets = petInfo.filter((pet) => {
    switch (petState) {
      case "당일":
        return pet.clinic_today; // 예를 들어, 오늘 진료를 받는다는 속성이 있다고 가정
      case true:
        return pet.admit_to_hospital === true;
      case false:
        return pet.admit_to_hospital === false;
      default:
        return true; // "전체보기"와 일치하는 기타 상태들
    }
  });

  return (
    <ChartListUl>
      <div>{filteredPets.length} 마리등록</div>
      {filteredPets.map((pet) => {
        const { btnColor, textColor, label } = getButtonProps(
          pet.admit_to_hospital
        );
        return (
          <ChartListLi key={pet.id}>
            <ListLiLeft>
              <ListLiLeftImg
                src="../public/image/title_logo.gif"
                alt="테스트 이미지"
              />
              <div>
                <Link to={`/chart/${pet.id}`}>
                  <div>{pet.name}</div>
                  <div>{pet.species}</div>
                </Link>
              </div>
            </ListLiLeft>
            <ListLiRight>
              <SmallButton btnColor={btnColor} textColor={textColor}>
                {label}
              </SmallButton>
              <div>
                <div>{pet.admit_to_hospital_in}</div>
                <div>{pet.clinic_today}</div>
              </div>
            </ListLiRight>
          </ChartListLi>
        );
      })}
    </ChartListUl>
  );
}

export default List;
