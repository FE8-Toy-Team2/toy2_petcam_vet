import { useEffect, useState } from "react";
import { getDocs, collection, query } from "firebase/firestore";
import { dataBase } from "../../firebase";
import styled from "styled-components";
import Swal from "sweetalert2";
import { icons } from "@tiptap/pm/menu";

const ChartSection = styled.section`
  h3 {
    margin-bottom: 2rem;
  }
`;

const FriendToday = styled.li`
  width: fit-content;
  padding: 8px;
  margin: 1rem 0;
  background-color: var(--color-prime);
  border-radius: 10px;
  span:first-child {
    font-size: 1.1rem;
  }
`;

const Chart = () => {
  const [friendsToday, setFriendsToday] = useState([]);

  const fetchData = async () => {
    const dataQuery = query(collection(dataBase, "chartDatas"));
    const dataResult = await getDocs(dataQuery);

    const newFriends = dataResult.docs.map(doc => doc.data()).filter(data => {
      const dataDate = new Date(data.clinic_today);
      const currentDate = new Date();
      return (dataDate.getFullYear() === currentDate.getFullYear()
        && dataDate.getMonth() === currentDate.getMonth()
        && dataDate.getDate() === currentDate.getDate());
    });
    console.log(newFriends);
    setFriendsToday(newFriends);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "오류로 인해 목록 갱신에 실패했습니다."
      });
    }
  }, []);

  return (
    <ChartSection>
      <h3>오늘 진료인 친구들</h3>
      <ul>
        {
          friendsToday.map(friend => {
            return (
              <FriendToday key={friend.name}>
                <span>{friend.name}</span>
                <span>{friend.species}</span>
              </FriendToday>
            );
          })
        }
      </ul>
    </ChartSection>
  );
};

export default Chart;
