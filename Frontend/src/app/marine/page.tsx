import Image from "next/image";
import PolaroidCard from "@/components/PolaroidCard";

export default function Home() {
  const marine = [
    {
      imgSrc: "/img/mr00.jpg",
      name: "พนอ gala premiere",
      location: "Paragon Cineplex",
      date: "13 Jan 2025",
    },
    {
      imgSrc: "/img/mr01.jpg",
      name: "Japan Expo 2025 Press conference",
      location: "Central wOrld",
      date: "14 Jan 2025",
    },
    {
      imgSrc: "/img/mr0.jpg",
      name: "Binance street of the future",
      location: "Siam Square",
      date: "18 Jan 2025",
    },
    {
      imgSrc: "/img/mr03.jpg",
      name: "Special Olympics Charity Run",
      location: "Benchakitti Park",
      date: "26 Jan 2025",
    },
    {
      imgSrc: "/img/mr04.jpg",
      name: "#Sukinanda Roadshow",
      location: "Union Mall",
      date: "26 Feb 2025",
    },
    {
      imgSrc: "/img/mr05.jpg",
      name: "TIF Asia Tour 2025",
      location: "Central wOrld",
      date: "07 Feb 2025",
    },
    {
      imgSrc: "/img/mr06.jpg",
      name: "Japan Expo Thailand 2025",
      location: "Central wOrld",
      date: "09 Feb 2025",
    },
    {
      imgSrc: "/img/mr07.jpg",
      name: "Green Flash Press Tour",
      location: "Hitz Thailand, Spacebar Vibe, ThaiPBS",
      date: "14 Feb 2025",
    },
    {
      imgSrc: "/img/mr08.jpg",
      name: "Green Flash Roadshow",
      location: "Central Chiangmai Airport",
      date: "16 Feb 2025",
    },
    {
      imgSrc: "/img/mr09.jpg",
      name: "3CE Dream In Cashmere In BKK",
      location: "Parc Paragon",
      date: "21 Feb 2025",
    },
    {
      imgSrc: "/img/mr10.jpg",
      name: "BIII Stage",
      location: "The Bazaar Hotel",
      date: "23 Feb 2025",
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
          {marine.map((event, index) => (
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
