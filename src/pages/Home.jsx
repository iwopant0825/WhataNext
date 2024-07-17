import { Link } from "react-scroll";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeLayout id="home">
      <HomeContext>
        <HomeContext2>내가 소설을 만들 수 있다고?</HomeContext2>
        What’s NEXT
      </HomeContext>
      <HomeButtonLayout to="generate" smooth={true} duration={500}>
        <HomeButton>Start generate &gt;</HomeButton>
      </HomeButtonLayout>
    </HomeLayout>
  );
}

const HomeLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    288deg,
    #b0daff 0%,
    #94cdff 11.87%,
    #26c0f7 25.07%,
    #27bcf7 39.31%,
    #2da4f8 53.71%,
    #3097f9 66.77%,
    #3583fa 80.11%,
    #377cfb 90.64%,
    #377cfb 100%
  );
`;
const HomeContext = styled.div`
  color: #fbfff1;
  text-align: center;
  font-size: 80px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const HomeContext2 = styled.div`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 20px;
`;
const HomeButtonLayout = styled(Link)`
  width: 224px;
  height: 74px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--Radius-12, 12px);
  cursor: pointer;
`;
const HomeButton = styled.div`
  color: #09adec;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
