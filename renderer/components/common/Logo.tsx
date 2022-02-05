import styled from "@emotion/styled";
import LogoImg from "../../assets/images/metri.png";

// 로고의 크기가 유동적으로 바뀔 필요가 있을까?
export default function Logo() {
  return (
    <LogoContainer>
      <LogoSource src={LogoImg.src} />
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  width: 60%;
  height: auto;
  margin: 110px 0;

  @media screen and (min-width: 769px) {
    // 768 * 0.6
    max-width: 460.8px;
  }
`;

const LogoSource = styled.img`
  width: 100%;
  height: 100%;
`;
