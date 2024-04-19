import { useNavigate } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { dataBase } from "../../firebase";
import { NormalButton } from "../Buttons";
import styled from "styled-components";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const PostControlButtonsWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  & button {
    font-family: inherit;
  }
`;

const PostControlButtons = ({ id, dbId }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      showDenyButton: true,
      confirmButtonText: "예",
      denyButtonText: "아니오"
    }).then(async (result) => {
      if (result.isConfirmed) {
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
        await deleteDoc(doc(dataBase, "announcement", dbId));
        navigate("/announcement");
        Toast.fire({
          icon: "error",
          title: "삭제했습니다."
        });
      }
    });
  };

  return (
    <PostControlButtonsWrapper>
      <li>
        <NormalButton btnColor="var(--color-prime)" onClick={() => { navigate(`/announcement/${id}/edit`); }}>
          수정하기
        </NormalButton>
      </li>
      <li>
        <NormalButton btnColor="var(--color-prime)" onClick={handleDelete}>
          삭제하기
        </NormalButton>
      </li>
    </PostControlButtonsWrapper>
  );
};

PostControlButtons.propTypes = {
  id: PropTypes.number.isRequired,
  dbId: PropTypes.string.isRequired
};

export default PostControlButtons;
