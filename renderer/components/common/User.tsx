import styled from "@emotion/styled";
import { COLOR } from "../../constants/color";

interface UserInterface {
  userName: string;
  userImageUrl: string;
}

export default function User({ userName, userImageUrl }: UserInterface) {
  return (
    <UserContainer>
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
