import Image from "next/image";
import PolaroidCard from "@/components/PolaroidCard";

export default function Home() {

  const patt = [
    {
      imgSrc: "/img/patt00.jpg",
      name: "Whisper Roar Press Tour",
      location: "The Guitar Mag, Sudsapda",
      date: "21 Jan 2025",
    },
    {
      imgSrc: "/img/patt0.jpg",
      name: "Whisper Roar Stage",
      location: "The Bazaar Hotel",
      date: "26 Jan 2025",
    },
    {
      imgSrc: "/img/patt02.jpg",
      name: "Trainee Stage",
      location: "The Bazaar Hotel",
      date: "2 Feb 2025",
    },
    {
      imgSrc: "/img/patt03.jpg",
      name: "Japan Expo Thailand 2025",
      location: "Central wOrld",
      date: "9 Feb 2025",
    },
    {
      imgSrc: "/img/patt0.jpg",
      name: "1st Preliminary Results",
      location: "Major Cineplex Sukhumvit",
      date: "12 Feb 2025",
    },
    {
      imgSrc: "/img/patt05.jpg",
      name: "BIII Stage",
      location: "The Bazaar Hotel",
      date: "15 Feb 2025",
    },
    {
      imgSrc: "/img/patt06.jpg",
      name: "Whisper Roar Stage",
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
          {patt.map((event, index) => (
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
