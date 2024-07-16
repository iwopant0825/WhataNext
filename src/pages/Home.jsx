import { Link } from "react-scroll";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeLayout id="home" >
      <HomeContext>
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
  background: linear-gradient(288deg, #B0DAFF 0%, #94CDFF 11.87%, #26C0F7 25.07%, #27BCF7 39.31%, #2DA4F8 53.71%, #3097F9 66.77%, #3583FA 80.11%, #377CFB 90.64%, #377CFB 100%);
`;
const HomeContext = styled.div`
  color: #FBFFF1;
  text-align: center;
  font-size: 80px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 50px;
  display: flex;
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
color: #09ADEC;
text-align: center;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;
