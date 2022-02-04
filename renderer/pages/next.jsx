import React from "react";
import Link from "next/link";
import Header from "../components/Header.tsx";

function Next() {
  return (
    <React.Fragment>
      <Header title="Next" />
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/home">
            <a>Go to home page</a>
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Next;
