import { route } from "next/dist/server/router";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ThemeToggler } from "../ThemeToggler";
import styles from "./index.module.scss";

export const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  return (
    <div className={styles.Layout}>
      <header className={styles.Layout__Header} style={{}}>
        <Link href="/">
          <a>
            {router.pathname === "/" ? (
              <h1 className={styles.Layout__Heading}>Overreacted</h1>
            ) : (
              <h3
                className={`${styles.Layout__Heading} ${styles["Layout__Heading--pink"]}`}
              >
                Overreacted
              </h3>
            )}
          </a>
        </Link>

        <ThemeToggler />
      </header>
      {children}
    </div>
  );
};
