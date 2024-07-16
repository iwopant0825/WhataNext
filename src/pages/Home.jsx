import styled from "styled-components";

export default function Home() {
  return (
    <HomeLayout id="home">
      <HomeContext>
      “뒷 내용이 너무 궁금한데..."
      </HomeContext>
      <HomeButtonLayout>
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
  color: #fbfff1;
  text-align: center;
  font-size: 70px;
  font-style: normal;
  font-family: "Gmarket Sans";
  font-weight: 500;
  line-height: normal;
  margin-bottom: 50px;
  display: flex;
`;
const HomeButtonLayout = styled.div`
  width: 254px;
  height: 74px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:24px;
`;
const HomeButton = styled.div`
  color: #009dff;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
