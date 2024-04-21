import { useNavigate } from "react-router-dom";
import { doc, updateDoc, collection, addDoc } from "firebase/firestore";
import { dataBase } from "../../firebase";
import { NormalButton } from "../Buttons";
import styled from "styled-components";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const WriteControlWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 24px 0;
  & > button {
    font-family: inherit;
  }
`;

const WriteButton = ({ title, content, announcement }) => {
  const navigate = useNavigate();

  const printEmptyTitleAlert = () => {
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
      icon: "warning",
      title: "제목을 입력해 주세요."
    });
  }

  const updateInput = async (event) => {
    event.preventDefault();
    if (!title.length) {
      printEmptyTitleAlert();
      return;
    }
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
    try {
      announcement
      ? await updateDoc(doc(dataBase, "announcement", announcement.id), { 
        content: JSON.stringify(content),
        date: new Date().valueOf().toString() 
      })
      : await addDoc(collection(dataBase, "announcement"), {
        title: title,
        content: JSON.stringify(content),
        date: new Date().valueOf().toString()
      });
      navigate("/announcement");
      Toast.fire({
        icon: "success",
        title: "등록했습니다."
      });
    } catch (error) {
      console.log(error);
      Toast.fire({
        icon: "error",
        title: "오류로 인해 등록에 실패했습니다."
      });
    }
  };

  return (
    <WriteControlWrapper>
      <NormalButton btnColor="var(--color-prime)" onClick={updateInput}>
        제출하기
      </NormalButton>
    </WriteControlWrapper>
  );
};

WriteButton.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  announcement: PropTypes.object,
};

export default WriteButton;
