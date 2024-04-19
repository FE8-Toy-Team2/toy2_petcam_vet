import { useNavigate } from "react-router-dom";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
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


const WriteButton = ({ title, content }) => {
  const navigate = useNavigate();

  const updateInput = event => {
    event.preventDefault();
    console.log(title, content);
    Swal.fire({
      title: "정말 등록하시겠습니까?",
      showDenyButton: true,
      confirmButtonText: "예",
      denyButtonText: "아니오"
    }).then(async (result) => {
      if (result.isConfirmed) {
        // const Toast = Swal.mixin({
        //   toast: true,
        //   position: "top-end",
        //   showConfirmButton: false,
        //   timer: 3000,
        //   timerProgressBar: true,
        //   didOpen: (toast) => {
        //     toast.onmouseenter = Swal.stopTimer;
        //     toast.onmouseleave = Swal.resumeTimer;
        //   }
        // });
        // Toast.fire({
        //   icon: "success",
        //   title: "등록했습니다."
        // });
        await addDoc(collection(dataBase, "announcement"), {
          title: title,
          content: JSON.stringify(content),
          date: new Date().valueOf().toString()
        }).then(() => {
          navigate("/announcement");
        });
      }
    });
  }

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
  content: PropTypes.string.isRequired
};

export default WriteButton;
