import React, { useEffect, useState } from "react";
import styles from "./sponsers.module.css";

const Sponsers = (props) => {
  const [sponsers,setSponsers] = useState(props.sponsers);

  return (
    <div className={`${styles["sponsers"]}`}>
        
      {sponsers.map((sponser, index) => (
        <div className={`${styles["sponser"]}`}>
        </div>
      ))}
    </div>
  );
};

export default Sponsers;
