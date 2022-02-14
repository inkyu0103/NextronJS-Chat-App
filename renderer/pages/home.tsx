import LoginForm from "../components/common/LoginForm";
import { useRouter } from "next/dist/client/router";
import Layout from "../components/Layout";
import Link from "next/link";
import UserService from "../repository/UserService";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/rootSlice";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    try {
      const userName = await UserService.loginUser({ ...data });
      if (userName) {
        dispatch(loginUser(userName));
        router.push(`/main/${userName}`);
        return;
      }

      alert("로그인에 실패하였습니다.");
    } catch (e) {
      console.log("Error at Home", e);
    }
  };

  return (
    <Layout>
      <LoginForm onSubmit={onSubmit} message="Login" isLogin />
    </Layout>
  );
}
