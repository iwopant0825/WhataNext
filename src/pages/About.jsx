import styled from "styled-components";
import Card from "../components/Card";

export default function About() {
  return (
    <AboutLayout>
      <AboutContent>
        <TitleContent>
          <TitleConText1>유용한 기능</TitleConText1>
          <TitleConText2>소설의 일부분만 있어도 OK!</TitleConText2>
        </TitleContent>
        <CardContent>
          <Card img={'/1.png'} title1={"열린결말은 이제 그만...."} title2={"세드 엔딩이어도 좋으니 끝을 맺어줘"} text1={'마무리'} text2={'Ending'}/>
          <Card img={'/2.png'} title1={"로멘스 소설을 스릴러로 바꾸면"} title2={"어떻게 될까?"} text1={'창작'} text2={'Create'}/>
          <Card img={'/3.png'} title1={"소설의 결말을 바꾸고 만들어가며 느끼는"} title2={"즐거움은 그냥 읽을때보다 훨씬 많아진다구"} text1={'즐거움'} text2={'Joy'}/>
        </CardContent>
      </AboutContent>  
    </AboutLayout>
  );
}

const AboutLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 62px;
  gap: 23px;
`;
const TitleConText1 = styled.div`
  color: #009eec;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const TitleConText2 = styled.div`
  color: var(--Default-Black, #000);
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const CardContent = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width:768px) {
    flex-direction:column;
  }
`;
