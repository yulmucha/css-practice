import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h2>CSS</h2>
      <ul>
        <li>
          <a href="/flex">Flex</a>
        </li>
        <li>
          <a href="/grid">Grid</a>
        </li>
      </ul>
    </div>
  );
}
