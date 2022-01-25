import type { NextPage } from "next";
import { useState } from "react";
import ExploreWrap from "../components/home/exploresection/ExploreWrap";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import MainWrap from "../components/home/mainsection/MainWrap";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  console.log(session, status);

  const [exploreScroll, setExploreScroll] = useState<boolean>(false);
  const exploreScrollFunc = () => {
    setExploreScroll(true);
  };
  // if (!session) {
  //   return <h1>No access</h1>;
  // }

  return (
    <div style={{ height: "1300px" }}>
      {/* {!session && (
        <>
          <span className={styles.notSignedInText}>You are not signed in</span>
          <a
            href={`/api/auth/signin`}
            className={styles.buttonPrimary}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign in
          </a>
        </>
      )}
      {session?.user && (
        <>
          <span
            style={{ backgroundImage: `url(${session.user.image})` }}
            className={styles.avatar}
          />
          <span className={styles.signedInText}>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.email || session.user.name}</strong>
          </span>
          <a
            href={`/api/auth/signout`}
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </a>
        </>
      )} */}
      <MainWrap exploreScrollFunc={exploreScrollFunc}/>
      <ExploreWrap
        toScroll={exploreScroll}
        className="explore__section--toScroll"
      />
    </div>
  );
};

export default LandingPage;
