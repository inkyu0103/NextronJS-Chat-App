import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { COLOR } from "../../constants/color";
import { RootState } from "../../redux/store";
import ChatService from "../../repository/ChatService";

interface UserInterface {
  email?: string;
  userName: string;
  userImageUrl: string;
}

export default function User({ email, userName, userImageUrl }: UserInterface) {
  const myEmail = useSelector((state: RootState) => state.email);
  const handleDubleClick = async () => {
    await ChatService.createChatRoom(myEmail, email);
  };
  return (
    <UserContainer onDoubleClick={handleDubleClick}>
      <UserImage src={userImageUrl} />
      <UserNameContainer>{userName}</UserNameContainer>
    </UserContainer>
  );
}

const UserContainer = styled.section`
  width: 60%;
  height: 60px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  background: #c4c4c4;
`;

const UserImage = styled.img`
  width: 45px;
  height: 45px;
  margin-left: 30px;
  background: black;
  border-radius: 50%;
`;

const UserNameContainer = styled.p`
  margin-left: 70px;
`;
