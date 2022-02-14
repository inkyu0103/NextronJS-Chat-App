import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { RootState } from "../../redux/store";
import styled from "@emotion/styled";
import Icon from "../../components/common/Icon";
import User from "../../components/common/User";
import { COLOR } from "../../constants/color";
import Dockbar from "../../components/common/Dockbar";
import back from "../../assets/images/back.png";
import { useForm } from "react-hook-form";
import UserService from "../../repository/UserService";

export default function SearchUser() {
  const isDesktop = useMediaQuery({ minWidth: 769 });
  const [friend, setFriend] = useState({
    email: null,
    userName: null,
    photoUrl: null,
  });
  const { email, userName, photoUrl, friendsList } = useSelector(
    (state: RootState) => state
  );

  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const goBeforePage = () => router.back();
  const onSubmit = async ({ email }: any) => {
    const userData = await UserService.searchUser(email);
    if (userData)
      setFriend({
        email: userData.email,
        userName: userData.userName,
        photoUrl: userData.photoUrl,
      });
  };

  return (
    <MainContainer>
      <DesktopUserWrapper>
        <MainHeader>
          <IconContainer>
            <Icon handleClick={goBeforePage} iconImageUrl={back.src} />
          </IconContainer>
        </MainHeader>
        <SearchListContainer>
          <SearchFormContainer onSubmit={handleSubmit(onSubmit)}>
            <SearchInput
              type="email"
              {...register("email", { required: true })}
            />
          </SearchFormContainer>

          {!friend.email ? (
            <h1>친구가 없네요</h1>
          ) : (
            <>
              <User
                userImageUrl={friend.photoUrl}
                userName={friend.userName}
                email={friend.email}
              />
              <button onClick={() => UserService.addFriend(email, friend)}>
                친구 추가하기
              </button>
            </>
          )}
        </SearchListContainer>

        <Dockbar />
      </DesktopUserWrapper>
      <DesktopChatWrapper></DesktopChatWrapper>
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

const SearchListContainer = styled.main`
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

const SearchFormContainer = styled.form`
  width: 60%;
`;

const SearchInput = styled.input`
  width: 100%;
`;
