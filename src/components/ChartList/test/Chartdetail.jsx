import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../../firebase"; // 이 경로는 실제 설정에 맞게 조정해야 함

function DetailPage() {
  const { id } = useParams();
  const [petDetails, setPetDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPetDetails = async () => {
      const docRef = doc(dataBase, "chartDatas", id); // 'chartDatas'는 컬렉션 이름
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPetDetails(docSnap.data());
        setLoading(false);
      } else {
        console.log("No such document!");
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [id]); // id가 바뀔 때마다 이 함수를 다시 실행

  if (loading) return <div>Loading...</div>;
  if (!petDetails) return <div>No data found for this pet.</div>;

  return (
    <div>
      <h1>Detail Page for Pet ID: {id}</h1>
      <div>
        <strong>Name:</strong> {petDetails.name}
        <br />
        <strong>Species:</strong> {petDetails.species}
        <br />
        {/* 추가적인 펫 정보를 렌더링 */}
      </div>
    </div>
  );
}

export default DetailPage;
