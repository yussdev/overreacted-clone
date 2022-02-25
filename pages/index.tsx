import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Profile } from "../components/Profile";
import { postsSelector, setPosts } from "../redux/posts";
import { postsAPI } from "../services";
import { Post } from "../components/Post";
import styles from "../styles/Home.module.scss";
import { Footer } from "../components/Footer";

export default function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);
  const hasPosts = Boolean(posts.length);

  useEffect(() => {
    postsAPI.getAllPosts().then((posts) => {
      dispatch(setPosts(posts));
    });
  }, [dispatch]);

  return (
    <div className={styles.HomePage}>
      <Head>
        <title>Overreacted — A blog by Dan Abramov</title>
        <meta name="description" content="Overreacted — A blog by Dan Abramov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Profile />
        <div>
          {!hasPosts && <p>Loading....</p>}
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
      {hasPosts && <Footer />}
    </div>
  );
}
