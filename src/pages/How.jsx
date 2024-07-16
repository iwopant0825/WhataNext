import styled from "styled-components";
import Card from "../components/Card";

export default function How() {
  return (
    <HowLayout>
      <HowContent>
        <TitleContent>
          <TitleConText1>백엔드 프론트엔드 AI의 조화</TitleConText1>
          <TitleConText2>어떻게 만들었는지 궁금해요!</TitleConText2>
        </TitleContent>
        <CardContent>
          <Card img={'/4.png'} title1={"빠른 개발과 간단한 유지보수로 "} title2={"What’s NEXT 관리가ㅡ쉬워요"} text1={'FastAPI'} text2={'Backend'}/>
          <Card img={'/5.png'} title1={"컴포넌트 기반 아키텍처로 높은"} title2={"유지보수성과 코드 재사용성을 지니고있어요"} text1={'React'} text2={'Frontend '}/>
          <Card img={'/6.png'} title1={"트랜스포머 기반의 다양한 모델들과 "} title2={"학습 스크립트를 구현한 일종의 모듈이에요"} text1={'Huggingface'} text2={'AI'}/>
        </CardContent>
      </HowContent>  
    </HowLayout>
  );
}

const HowLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HowContent = styled.div`
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