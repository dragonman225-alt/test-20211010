import { useContext } from "react";

import styles from "./styles.module.scss";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { SecondHeader } from "../SecondHeader";
import { Content } from "../Content";
import { AppStateContext } from "../../store/appStateContext";
import { TAB } from "../../store/tabs";

export function Card() {
  const { shouldShowSecondHeader, currentTab } = useContext(AppStateContext);

  return (
    <div className={styles.card}>
      <div className={styles.fixedSizeBlock}>
        <Header />
      </div>
      {shouldShowSecondHeader && (
        <div className={styles.fixedSizeBlock}>
          <SecondHeader />
        </div>
      )}
      <div className={styles.content}>
        {currentTab === TAB.ALL && <Content />}
      </div>
      <div className={styles.fixedSizeBlock}>
        <Footer />
      </div>
    </div>
  );
}
