import LoginForm from "../components/common/LoginForm";
import { useRouter } from "next/dist/client/router";
import Layout from "../components/Layout";

export default function Home() {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/main/12124");
  };

  return (
    <Layout>
      <LoginForm onSubmit={handleSubmit} message="Login" />
    </Layout>
  );
}
