import { useNavigate } from "react-router-dom";
import { doc, updateDoc, collection, addDoc } from "firebase/firestore";
import { dataBase } from "../../firebase";
import { NormalButton } from "../Buttons";
import styled from "styled-components";
import PropTypes from "prop-types";

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

  const updateInput = async (event) => {
    event.preventDefault();
    announcement
      ? await updateDoc(doc(dataBase, "announcement", announcement.id), {
          content: JSON.stringify(content),
          date: new Date().valueOf().toString(),
        })
      : await addDoc(collection(dataBase, "announcement"), {
          title: title,
          content: JSON.stringify(content),
          date: new Date().valueOf().toString(),
        });
    navigate("/announcement");
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
