import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HomeHeader = styled.header`
  position: sticky;
  top: 0;
`;

const Navgation = styled.nav`
  display: flex;
  gap: 4rem;
  background-color: #b3b3b3;

  padding: 1.5rem 0.5rem;
  color: #3e3a39;
`;

const NavUl = styled.ul`
  display: flex;
  gap: 1rem;
`;

const Timer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3e3a39;

  padding: 0.5rem;
  color: white;
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
      <HomeHeader>
        <Timer>
          현재 시간 : {setDate} {timer.toLocaleTimeString()}
          <div>
            <Button>회원가입</Button>
            <Button>로그인</Button>
          </div>
        </Timer>
        <Navgation>
          <div>로고 이미지</div>
          <NavUl>
            <Link to="chartlist">
              <li>입원/퇴원관리</li>
            </Link>
            <Link to="register">
              <li>동물등록</li>
            </Link>
            <Link to="announcement">
              <li>공지사항</li>
            </Link>
          </NavUl>
        </Navgation>
      </HomeHeader>
    </>
  );
}

export default Header;
