import styles from "./App.module.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SecondHeader } from "./components/SecondHeader";
import { Content } from "./components/Content";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.headers}>
        <Header />
        <SecondHeader />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
