import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import ExploreWrap from "../components/home/exploresection/ExploreWrap";
import { signIn, signOut, useSession } from "next-auth/react";
import MainWrap from "../components/home/mainsection/MainWrap";
import styles from "./index.module.css";

const BlogPage: NextPage = () => {
  // console.log(process.env.NEXT_PUBLIC_GITHUB_ID);

  const [exploreScroll, setExploreScroll] = useState<boolean>(false);
  const scrollExplore = () => {
    setExploreScroll(true);
  };
  const { data: session } = useSession();
  let accessToken;
  if (session) {
    accessToken = session.accessToken;
  }
  console.log("session,accessToken", session, accessToken);

  return (
    <div style={{ height: "1300px" }}>
      <Head>
        <title>CrypDough</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainWrap scrollExplore={scrollExplore} />
      <ExploreWrap
        toScroll={exploreScroll}
        className={styles["explore__section--toScroll"]}
      />
    </div>
  );
};

export default BlogPage;

// export default function Component() {
//   const { data: session ,status} = useSession()
//   console.log(session, status);
//   if (session) {
//     return (
//       <>
//         Signed in as <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }
