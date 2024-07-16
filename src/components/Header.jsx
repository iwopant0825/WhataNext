import styled from "styled-components";

export default function Header() {
  return (
    <Headers>
      <HeadersConText>What’s<br/>NEXT</HeadersConText>
      <HeadersConText>Home</HeadersConText>
      <HeadersConText>About</HeadersConText>
      <HeadersConText>How</HeadersConText>
      <HeadersConText>Generate</HeadersConText>
    </Headers>
  );
}

const Headers = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  padding :20px;
  gap:50px;
  position:fixed;
  margin: 0 100px;
`;
const HeadersConText = styled.div`
  color: #fff;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
