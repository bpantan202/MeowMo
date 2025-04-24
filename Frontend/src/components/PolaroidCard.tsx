"use client";

import { useState } from "react";
import styles from "./polaroidcard.module.css";
import Image from "next/image";


export default function PolaroidCard({
  imgSrc,
  name,
  location,
  date,
}: {
  imgSrc: String;
  name: String;
  location: String;
  date: String;
}) {
  const [pic, setPic] = useState(imgSrc);

  function onCardClick() {
    alert(`You select ${name}`)
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardImg} onClick={() => onCardClick()}>
        <Image
          src={pic}
          alt="Meow Pic"
          fill={true}
          objectFit="cover"
          onError={() => setPic("/img/MeowMo.jpg")}
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div
        style={{
          width: "100%",
          // fontFamily: "Sriracha",
          fontFamily: "Kanit",
          fontSize: "16px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontWeight: "400",
          marginTop: "4px",
          marginBottom: "2px",
        }}
      >
        {name ? name : "-"}
      </div>
      <div
        style={{
          width: "100%",
          fontFamily: "Kanit",
          fontSize: "12px",
          display: "flex",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontWeight: "300",
        }}
      >
        <div
          style={{
            fontFamily: "Kanit",
            fontSize: "8px",
            marginTop: "2px",
            paddingRight: "5px",
          }}
        >
          📍
        </div>
        {location ? location : "-"}
      </div>
      <div
        style={{
          width: "100%",
          fontFamily: "Kanit",
          fontSize: "12px",
          display: "flex",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontWeight: "300",
        }}
      >
        <div
          style={{
            fontFamily: "Kanit",
            fontSize: "8px",
            marginTop: "2px",
            paddingRight: "5px",
          }}
        >
          🗓️
        </div>
        {date ? date : "-"}
      </div>
      {/* <div
        style={{
          paddingTop: "14px",
          display: "flex",
          justifyContent: "end",
          width: "100%",
          fontSize: "10px",
          fontFamily: "monospace",
          // fontFamily: "Kanit",
          // fontWeight: "300",
        }}
      >
        {date ? date : "-"}
      </div> */}
    </div>
  );
}
