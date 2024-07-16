import styled from "styled-components";

export default function Card({ img, title1, title2, text1, text2 }) {
  return (
    <CardLayout>
      <Top>
        <img width={170} src={img} alt="" />
      </Top>
      <Bottom>
        <BottomContext1>{title1}<br/>{title2}</BottomContext1>
        <BottomContext2>
          {text1}
          <BottomContext3>{text2}</BottomContext3>
        </BottomContext2>
      </Bottom>
    </CardLayout>
  );
}

const CardLayout = styled.div`
  border-radius: 40px;
  border: 1px solid rgba(0, 0, 0, 0.17);
  background: var(--Color-Palette-Content-Primary, #fafafa);
  width: 355px;
  height: 400px;
`;
const Top = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Bottom = styled.div`
  height: 30%;
  width: 100%;
  padding: 0 20px;
`;
const BottomContext1 = styled.div`
  color: var(--Default-Black, #000);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`;

const BottomContext2 = styled.div`
  color: var(--Default-Black, #000);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: end;
`;
const BottomContext3 = styled.div`
  color: var(--Default-Black, #000);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
