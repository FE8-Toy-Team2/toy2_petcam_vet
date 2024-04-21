import React, { useEffect, useState } from "react";
import { ChartListUl, ChartListLi, ListLiLeft, ListLiLeftImg, ListLiRight } from "./Styles.jsx";
import { SmallButton } from "../Buttons.jsx";
import { collection, getDocs, query, orderBy, doc } from "firebase/firestore";
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
    const dataQuery = query(collection(dataBase, "chartDatas"), orderBy("admit_to_hospital_in", "asc"));
    const dataResult = await getDocs(dataQuery);
    const petInfoData = dataResult.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setPetInfo(petInfoData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredPets = petInfo.filter((pet) => {
    switch (petState) {
      case true:
        return pet.admit_to_hospital === true;
      case false:
        return pet.admit_to_hospital === false;
      default:
        return true;
    }
  });



  return (
    <ChartListUl>
      <div>{filteredPets.length} 마리등록</div>
      {filteredPets.map((pet) => {
        const { btnColor, textColor, label } = getButtonProps(pet.admit_to_hospital);
        return (
          <ChartListLi key={pet.id}>
            <ListLiLeft>
              {pet.image !== "" ? (
                <ListLiLeftImg src={pet.image} alt="유저이미지" />
              ) : (
                <ListLiLeftImg src="../public/image/default_img.jpeg" alt="테스트 이미지" />
              )}
              <Link to={`/chart/${pet.id}`}> {/* Firestore 문서의 이름을 사용하여 링크 생성 */}
                <div>{pet.name}</div>
                <div>{pet.species}</div>
              </Link>
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
