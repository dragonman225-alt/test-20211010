import styles from "./styles.module.scss";
import { Bar } from "./Bar";

export function Content() {
  const items = [
    {
      name: "iPhone",
      count: 90,
    },
    {
      name: "Android",
      count: 80,
    },
    {
      name: "Samsung",
      count: 70,
    },
    {
      name: "Sony",
      count: 60,
    },
    {
      name: "HTC",
      count: 50,
    },
    {
      name: "ASUS",
      count: 40,
    },
    {
      name: "小米",
      count: 30,
    },
    {
      name: "Nokia",
      count: 20,
    },
  ];

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
            {items.map((item) => (
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
