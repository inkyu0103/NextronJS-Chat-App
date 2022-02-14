import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import Dockbar from "../../components/common/Dockbar";
import { COLOR } from "../../constants/color";
import User from "../../components/common/User";
import { useMediaQuery } from "react-responsive";
import UserService from "../../repository/UserService";
import { useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Icon from "../../components/common/Icon";
import search from "../../assets/images/search.png";
export default function Main() {
  const isDesktop = useMediaQuery({ minWidth: 769 });
  const { email, userName, photoUrl, friendsList } = useSelector(
    (state: RootState) => state
  );

  const router = useRouter();

  const goSearchPage = () => router.push("/main/search");

  useEffect(() => {
    UserService.currentUser();
  });

  if (isDesktop) {
    return (
      <MainContainer>
        <DesktopUserWrapper>
          <MainHeader>
            <IconContainer>
              <Icon handleClick={goSearchPage} iconImageUrl={search.src} />
            </IconContainer>
          </MainHeader>
          <UserListContainer>
            <User
              userName={userName}
              userImageUrl="https://images.generated.photos/2UB84j29Ty93F5GKNAfW8igcYlSVhU9VZ-1boNVhybQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvYTFjZjM2/MmYtMjllZS00ZThj/LWFiYmQtMTljNjIw/YWZlOGIwLmpwZw.jpg"
            />

            {friendsList.map(({ email, userName, photoUrl }: any) => (
              <User
                key={email}
                userName={userName}
                userImageUrl={photoUrl}
                email={email}
              />
            ))}
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

const IconContainer = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
`;
