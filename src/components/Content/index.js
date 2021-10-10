import { useContext } from "react";

import styles from "./styles.module.scss";
import { Bar } from "./Bar";
import { AppStateContext } from "../../store/appStateContext";

export function Content() {
  const { tableItems } = useContext(AppStateContext);

  return (
    <div className={styles.content}>
      <h2>TOP TERMS</h2>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>TERMS</th>
              <th>% OF TOTAL POSTS</th>
              <th># OF POSTS</th>
            </tr>
          </thead>
          <tbody>
            {tableItems.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>
                  <Bar value={item.count} />
                </td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
