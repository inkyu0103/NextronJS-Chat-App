import styled from "@emotion/styled";
import Logo from "./Logo";
import { COLOR } from "../../constants/color";
import { useForm } from "react-hook-form";
import Link from "next/link";

interface LoginFormInterface {
  onSubmit: (data: any) => void;
  message: string;
  isLogin?: boolean;
}

export default function LoginForm({
  onSubmit,
  message,
  isLogin = false,
}: LoginFormInterface) {
  const { register, handleSubmit } = useForm();
  return (
    <InputContainer>
      <Logo />
      <SignupForm onSubmit={handleSubmit(onSubmit)}>
        <EmailInput
          type="email"
          placeholder="이메일"
          required
          {...register("email", { required: true })}
        />
        <PasswordInput
          type="password"
          placeholder="비밀번호"
          required
          {...register("password", { required: true })}
        />

        <LoginButton type="submit">{message}</LoginButton>
      </SignupForm>
      {isLogin && (
        <p>
          아직 계정이 없으신가요?<Link href="/join">가입하세요</Link>
        </p>
      )}
    </InputContainer>
  );
}

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${COLOR.blue0};
  align-items: center;
`;
const SignupForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 769px) {
    max-width: 460.8px;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 10px;
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 10px;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 58px;
  margin-top: 10px;

  background-color: ${COLOR.blue2};
  cursor: pointer;
  color: white;
`;

const UserNameInput = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 10px;
`;
