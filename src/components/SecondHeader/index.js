import classNames from "classnames";
import styles from "./styles.module.scss";

function Button({ selected, onClick, children }) {
  return (
    <button
      class={classNames(styles.button, selected && styles.selected)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function SecondHeader() {
  return (
    <nav className={styles.secondHeader}>
      <ul>
        <Button>
          <li>ALL</li>
        </Button>
        <li>
          <Button>
            <i class="fab fa-twitter"></i>
          </Button>
        </li>
        <li>
          <Button>
            <i class="fab fa-facebook-f"></i>
          </Button>
        </li>
        <li>
          <Button>
            <i class="fab fa-instagram"></i>
          </Button>
        </li>
        <li>
          <Button>
            <i class="fab fa-youtube"></i>
          </Button>
        </li>
      </ul>
      <Button>HIDE</Button>
    </nav>
  );
}
