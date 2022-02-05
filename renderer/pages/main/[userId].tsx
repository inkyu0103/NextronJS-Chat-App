import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import Dockbar from "../../components/common/Dockbar";
import { COLOR } from "../../constants/color";
import User from "../../components/common/User";
import { useMediaQuery } from "react-responsive";

export default function Main() {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  if (isDesktop) {
    return (
      <MainContainer>
        <DesktopUserWrapper>
          <MainHeader />
          <UserListContainer>
            <User
              userName="인규"
              userImageUrl="https://images.generated.photos/2UB84j29Ty93F5GKNAfW8igcYlSVhU9VZ-1boNVhybQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvYTFjZjM2/MmYtMjllZS00ZThj/LWFiYmQtMTljNjIw/YWZlOGIwLmpwZw.jpg"
            />
          </UserListContainer>
          <Dockbar />
        </DesktopUserWrapper>
        <DesktopChatWrapper></DesktopChatWrapper>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <MainHeader />
      <UserListContainer>
        <User
          userName="인규"
          userImageUrl="https://images.generated.photos/2UB84j29Ty93F5GKNAfW8igcYlSVhU9VZ-1boNVhybQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvYTFjZjM2/MmYtMjllZS00ZThj/LWFiYmQtMTljNjIw/YWZlOGIwLmpwZw.jpg"
        />
      </UserListContainer>

      <Dockbar />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

const MainHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${COLOR.blue1};
`;

const UserListContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  overflow-x: hidden;
`;

const DesktopUserWrapper = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${COLOR.blue0};
`;

const DesktopChatWrapper = styled.section`
  width: 50%;
  height: 100%;
  background-color: ${COLOR.blue3};
`;
