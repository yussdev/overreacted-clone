import React from "react";
import { footerLinks } from "../../constants";
import styles from "./index.module.scss";

export const Footer: React.FC = () => {
  const rss = footerLinks[footerLinks.length - 1];

  return (
    <footer className={styles.Footer}>
      <div>
        {footerLinks.slice(0, 3).map(({ title, link }, idx) => (
          <React.Fragment key={title}>
            <a href={link} target="_blank" rel="noreferrer">
              {title}
            </a>
            {idx !== 2 && <span> . </span>}
          </React.Fragment>
        ))}
      </div>
      <a href={rss.link} target="_blank" rel="noreferrer">
        {rss.title}
      </a>
    </footer>
  );
};
