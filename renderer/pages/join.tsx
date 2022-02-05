import LoginForm from "../components/common/LoginForm";
import Layout from "../components/Layout";

export default function Join() {
  const handleSubmit = () => alert("로그인에 성공했습니다.");
  return (
    <Layout>
      <LoginForm onSubmit={handleSubmit} message="Join" />
    </Layout>
  );
}
