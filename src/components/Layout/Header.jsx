import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Navgation = styled.nav`
  display: flex;
  background-color: #b3b3b3;
  color: #3e3a39;
`;

const Timer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 0.5rem;
`;

const Button = styled.button`
  color: white;
  background-color: inherit;
`;

function Header() {
  const setCurrentTime = new Date();
  // let setTimer = setCurrentTime.toLocaleTimeString();
  let setDate = setCurrentTime.toLocaleDateString();

  const [timer, setTimer] = useState(new Date());

  const timeReRender = setInterval(() => {
    setTimer(new Date());
  }, 1000);

  useEffect(() => {
    return clearInterval(timeReRender);
  }, []);

  return (
    <>
      <Timer>
        현재 시간 : {setDate} {timer.toLocaleTimeString()}
        <div>
          <Button>회원가입</Button>
          <Button>로그인</Button>
        </div>
      </Timer>
      <Navgation>
        <ul>
          <li>입원/퇴원관리</li>
          <li>동물등록</li>
          <li>공지사항</li>
        </ul>
      </Navgation>
    </>
  );
}

export default Header;
