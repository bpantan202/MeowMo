import Image from "next/image";
import PolaroidCard from "@/components/PolaroidCard";

export default function Home() {
  const palmmy = [
    {
      imgSrc: "/img/pm00.jpg",
      name: "Japan Expo 2025 Press Conference",
      location: "Central wOrld",
      date: "14 Jan 2025",
    },
    {
      imgSrc: "/img/pm01.jpg",
      name: "Binance Street of the Future",
      location: "Siam Square",
      date: "18 Jan 2025",
    },
    {
      imgSrc: "/img/pm02.jpg",
      name: "Special Olympics Charity Run",
      location: "Benchakitti Park",
      date: "26 Jan 2025",
    },
    {
      imgSrc: "/img/pm03.jpg",
      name: "TIF Asia Tour 2025",
      location: "Central wOrld",
      date: "7 Feb 2025",
    },
    {
      imgSrc: "/img/pm04.jpg",
      name: "Japan Expo Thailand 2025",
      location: "Central wOrld",
      date: "9 Feb 2025",
    },
    {
      imgSrc: "/img/pm05.jpg",
      name: "1st Preliminary Results",
      location: "Major Cineplex Sukhumvit",
      date: "12 Feb 2025",
    },
    {
      imgSrc: "/img/pm06.jpg",
      name: "Green Flash Roadshow",
      location: "Central Chiangmai Airport",
      date: "16 Feb 2025",
    },
  ];

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "6rem",
        minHeight: "100vh",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "30px",
          }}
        >
          {palmmy.map((event, index) => (
            <PolaroidCard
              key={index}
              imgSrc={event.imgSrc}
              name={event.name}
              location={event.location}
              date={event.date}
            />
          ))}
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
