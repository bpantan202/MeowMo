import Image from "next/image";
import styles from "./page.module.css";
import PolaroidCard from "@/components/PolaroidCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "30px",
          }}
        >
          <PolaroidCard
            imgSrc={"/img/Gluay.jpg"}
            name={"Gluay"}
            location={"Meow"}
            date={"16 Feb 2025"}
          />
          <PolaroidCard
            imgSrc={"/img/road.jpg"}
            name={"Road"}
            location={"Meow"}
            date={"28 Oct 2025"}
          />
          
        </div>
      </div>

      {/* <div className={styles.description}>
      </div>

      <div className={styles.center}>
      </div>

      <div className={styles.grid}>
      </div> */}
    </main>
  );
}
