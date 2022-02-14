import LoginForm from "../components/common/LoginForm";
import Layout from "../components/Layout";
import UserService from "../repository/UserService";
import { useRouter } from "next/dist/client/router";

export default function Join() {
  const router = useRouter();
  const onSubmit = async (data: any) => {
    const userName = await UserService.createUser({ ...data });
    if (!userName) alert("이미 존재하는 이메일입니다.");
    else router.push(`/main/${userName}`);
  };
  return (
    <Layout>
      <LoginForm onSubmit={onSubmit} message="Join" />
    </Layout>
  );
}
