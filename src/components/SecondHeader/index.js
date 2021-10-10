import { useContext } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";
import { AppStateContext } from "../../store/appStateContext";
import { TAB } from "../../store/tabs";
import { ACTION } from "../../store/actions";

function TabButton({ representTab, children }) {
  const { currentTab, dispatch } = useContext(AppStateContext);

  return (
    <button
      className={classNames(
        styles.button,
        currentTab === representTab && styles.selected
      )}
      onClick={() =>
        dispatch({ type: ACTION.SWITCH_TO_TAB, data: representTab })
      }
    >
      {children}
    </button>
  );
}

function HideButton() {
  const { dispatch } = useContext(AppStateContext);

  return (
    <button
      className={styles.button}
      onClick={() => dispatch({ type: ACTION.TOGGLE_SECONDHEADER })}
    >
      HIDE
    </button>
  );
}

export function SecondHeader() {
  return (
    <nav className={styles.secondHeader}>
      <ul>
        <li>
          <TabButton representTab={TAB.ALL}>ALL</TabButton>
        </li>
        <li>
          <TabButton representTab={TAB.TWITTER}>
            <i className="fab fa-twitter"></i>
          </TabButton>
        </li>
        <li>
          <TabButton representTab={TAB.FACEBOOK}>
            <i className="fab fa-facebook-f"></i>
          </TabButton>
        </li>
        <li>
          <TabButton representTab={TAB.INSTAGRAM}>
            <i className="fab fa-instagram"></i>
          </TabButton>
        </li>
        <li>
          <TabButton representTab={TAB.YOUTUBE}>
            <i className="fab fa-youtube"></i>
          </TabButton>
        </li>
      </ul>
      <HideButton />
    </nav>
  );
}
