import {
  ChartListUl,
  ChartListLi,
  ListLiLeft,
  ListLiLeftImg,
  ListLiRight,
} from "./Styles.jsx";
import { SmallButton } from "../Buttons.jsx";
import fadb from "./test/db.js";

function List({ petState }) {
  const getButtonProps = (state) => {
    switch (state) {
      case "당일":
        return { btnColor: "#3D3939", textColor: "#EEEEEE" }; // 당일에 대한 색상과 텍스트
      case "퇴원":
        return { btnColor: "#504239", textColor: "#EEEEEE" }; // 퇴원에 대한 색상과 텍스트
      case "입원":
        return { btnColor: "#FFC603", textColor: "#3D3939" }; // 입원에 대한 색상과 텍스트
      default:
        return { btnColor: "#d1d1d1", textColor: "#3D3939" }; // 기본 값
    }
  };

  return (
    <ChartListUl>
      {fadb
        .filter((pet) => {
          return petState === "" || pet.state === petState;
        })
        .map((pet) => {
          const { btnColor, textColor } = getButtonProps(pet.state);
          return (
            <ChartListLi key={pet.id}>
              <ListLiLeft>
                <ListLiLeftImg
                  src="../public/image/title_logo.gif"
                  alt="테스트 이미지"
                />
                <div>
                  <div>{pet.name}</div>
                  <div>{pet.spic}</div>
                </div>
              </ListLiLeft>
              <ListLiRight>
                <SmallButton btnColor={btnColor} textColor={textColor}>
                  {pet.state}
                </SmallButton>
                <div>
                  <div>{pet.date}</div>
                  <div>{pet.time}</div>
                </div>
              </ListLiRight>
            </ChartListLi>
          );
        })}
    </ChartListUl>
  );
}

export default List;
