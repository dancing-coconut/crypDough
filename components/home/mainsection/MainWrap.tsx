import { useState } from "react";
import MainBox from "./MainBox";
import SubBox from "./SubBox";
import styles from "./MainWrap.module.css";
import NavigationBar from "../../NavigationBar";

interface Props {
  exploreScrollFunc: () => void;
}

const MainWrap = (props: Props) => {
  return (
    <>
      <NavigationBar
        scrollExplore={props.exploreScrollFunc}
        scroll={"ExploreSection"}
        itemcolor="#5B10A8"
        bgcolor="#FFFFFF"
        hovercolor="#FFFFFF"
        hoverbgcolor="linear-gradient(242.75deg, #410C75 19.25%, #B638FF 67%)"
      />
      <MainBox />
      <div className={styles["subbox"]}>
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
    </>
  );
};

export default MainWrap;
