import styles from "./App.module.scss";
import { Header } from "./components/Header";
import { Footer } from './components/Footer'
import { SecondHeader } from "./components/SecondHeader";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <SecondHeader />
      <Footer />
    </div>
  );
}

export default App;
