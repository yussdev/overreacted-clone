import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";

export const Profile: React.FC = () => {
  return (
    <div className={styles.Profile}>
      <div className={styles.Profile__ImgWrapper}>
        <Image src="/dan.jpeg" alt="Dan Abramov" width={56} height={56} />
      </div>
      <p className={styles.Profile__Heading}>
        Personal Blog by{" "}
        <a
          className={styles.Profile__Link}
          href="https://mobile.twitter.com/dan_abramov"
          target="_blank"
          rel="noreferrer"
        >
          Dan Abramov
        </a>
        . 
        <br />
        I explain with words and code.
      </p>
    </div>
  );
};
