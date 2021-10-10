import styles from "./App.module.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SecondHeader } from "./components/SecondHeader";
import { Content } from "./components/Content";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.fixedSizeBlock}>
        <Header />
      </div>
      <div className={styles.fixedSizeBlock}>
        <SecondHeader />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
      <div className={styles.fixedSizeBlock}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
