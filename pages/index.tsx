import type { NextPage } from "next";
import { useState } from "react";
import ExploreWrap from "../components/home/exploresection/ExploreWrap";

import Link from "next/link";
import MainWrap from "../components/home/mainsection/MainWrap";
import styles from "./index.module.css";

const BlogPage: NextPage = () => {
  // console.log(process.env.NEXT_PUBLIC_GITHUB_ID);

  const [exploreScroll, setExploreScroll] = useState<boolean>(false);
  const scrollExplore = () => {
    setExploreScroll(true);
  };

  return (
    <div style={{ height: "1300px" }}>
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
