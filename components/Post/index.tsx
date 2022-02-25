import Link from "next/link";
import React from "react";
import { IPost } from "../../types/post";
import styles from "./index.module.scss";

export const Post: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <article className={styles.Post}>
      <header>
        <h3 className={styles.Post__Heading}>
          <Link href={`/post/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </h3>
        <small className={styles.Post__Info}>
          {post.date.toDateString()} . {makeReadTime(post.id)}
        </small>
      </header>
      <p className={styles.Post__Body}>{post.body}</p>
    </article>
  );
};

const makeReadTime = (id) => {
  const mod = Math.floor(id % 5) + 1;
  return `${Array.from({ length: Math.floor(mod) })
    .fill("☕️")
    .join(" ")}  ${mod} min read`;
};
