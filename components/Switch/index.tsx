import React from "react";
import Image from "next/image";
import { moonDataUri, sunDataUri } from "../../constants";
import styles from "./index.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement>;
export const Switch: React.FC<Props> = (props) => {
  return (
    <label className={styles.Switch__Label}>
      <input className={styles.Switch__Input} type="checkbox" {...props} />
      <div className={styles.Switch__Box} tabIndex={-1}>
        <span>
          <Image
            className={styles.MoonIcon}
            src={moonDataUri}
            width="16"
            height="16"
            role="presentation"
            alt="Moon Icon"
          />
        </span>
        <span>
          <Image
            className={styles.SunIcon}
            src={sunDataUri}
            width="16"
            height="16"
            role="presentation"
            alt="Sun Icon"
          />
        </span>
      </div>
    </label>
  );
};
