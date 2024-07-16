import styled from "styled-components";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <Headers>
      <HeadersConText to="home" smooth={true} duration={500} MarginRight={"40px"} fontWeight={700} Color="#28BDF7" FontSize={'23px'}>What’s<br/>NEXT</HeadersConText>
      <HeadersConText to="home" smooth={true} duration={500} Color="#0897CE" FontSize={'17px'}>Home</HeadersConText>
      <HeadersConText to="about" smooth={true} duration={500} Color="#0897CE" FontSize={'17px'}>About</HeadersConText>
      <HeadersConText to="how" smooth={true} duration={500} Color="#0897CE" FontSize={'17px'}>How</HeadersConText>
      <HeadersConText to="generate" smooth={true} duration={500} Color="#0897CE" FontSize={'17px'}>Generate</HeadersConText>
    </Headers>
  );
}

const Headers = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  gap:50px;
  position:fixed;
  padding: 7px 100px;
  background-color:white;
`;

const HeadersConText = styled(Link)`
  color: #fff;
  text-align: center;
  font-size: ${p => p.FontSize};
  font-style: normal;
  font-weight: ${p => p.fontWeight || 600}; 
  line-height: normal;
  color: ${p => p.Color};
  margin-right: ${p => p.MarginRight};
  cursor: pointer; /* 링크 스타일 추가 */
`;
