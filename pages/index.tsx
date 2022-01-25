import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import ExploreWrap from "../components/home/exploresection/ExploreWrap";
import MainBox from "../components/home/mainsection/MainBox";
import SubBox from "../components/home/mainsection/SubBox";

import styles from "./index.module.css";
import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const LandingPage: NextPage = () => {
  const [exploreScroll, setExploreScroll] = useState(false);
  const { data: session, status } = useSession();
  const loading = status === "loading";
  console.log(session, status);

  const exploreScrollFunc = () => {
    setExploreScroll(true);
  };
  // if (!session) {
  //   return <h1>No access</h1>;
  // }

  return (
    <div style={{ height: "1300px" }}>
      {!session && (
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
      )}
      {/* <NavigationBar
        scrollExplore={exploreScrollFunc}
        scroll={"ExploreSection"}
        itemcolor="#5B10A8"
        bgcolor="#FFFFFF"
        hovercolor="#FFFFFF"
        hoverbgcolor="linear-gradient(242.75deg, #410C75 19.25%, #B638FF 67%)"
      />
      <MainBox />
      <div className={styles.subbox}>
        <SubBox
          bgUrl="/Images/LandingPage/InvestmentMainPage.png"
          alt="bitcoin-Investments"
          title="Investments"
          pathtitle="InvestmentPage"
        ></SubBox>

        <SubBox
          bgUrl="/Images/LandingPage/TransactionMainPage.png"
          alt="bitcoin-Transaction"
          title="Transaction"
          pathtitle="TransactionsPage"
        ></SubBox>

        <SubBox
          bgUrl="/Images/LandingPage/BitcoinMiningMainPage.png"
          alt="bitcoin-Mining"
          title="Bitcoin-Mining"
          pathtitle="MiningPage"
        ></SubBox>
      </div>
      <ExploreWrap
        toScroll={exploreScroll}
        className="explore__section--toScroll"
      /> */}
    </div>
  );
};

export default LandingPage;
