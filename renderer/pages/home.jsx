import Link from "next/link";
import Header from "../components/Header.tsx";

function Home() {
  return (
    <>
      <div>
        <Header title="home" />
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
          <br />
          <Link href="/greeting">Greeting</Link>
        </p>
        <img src="/images/logo.png" />
      </div>
    </>
  );
}

export default Home;
