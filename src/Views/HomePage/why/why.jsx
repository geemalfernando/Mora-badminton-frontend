import React, { useEffect } from "react";
import styles from "./why.module.css";

const Why = () => {
  return (
    <div className={`${styles["why-container"]}`}>
      <div className={`${styles["why-title"]}`}>
        ABOUT <p style={{ display: "inline-block", color: "#F205CB" }}>UMiSF</p>
      </div>
      <div className={`${styles["why-desc"]}`}>
        <p>
          UMiSF is the annual badminton tournament organized by MoraBadminton. It is conducted under 3 main
          categories; <b>All island age group badminton championship</b>,{" "}
          <b>University badminton championship</b>,{" "}
          <b>University individual badminton championship</b>,{" "}
          We warmly welcome badminton
          enthusiasts from across the island to come together in a spirit of
          friendly competition and sportsmanship, to showcase their skills, with
          the intention of facilitating connections among individuals who share
          a passion for badminton.
        </p>
      </div>
      <div className={`${styles["why-view-more"]}`}>
        <a href="/about" type="button">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Why;
