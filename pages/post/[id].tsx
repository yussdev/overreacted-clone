import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsAPI } from "../../services";
import { Post } from "../../components/Post";
import { addPost, postSelector } from "../../redux/posts";

export default function PostPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const post = useSelector(postSelector(Number(id)));

  useEffect(() => {
    if (id)
      postsAPI
        .getOnePost(Number(id))
        .then((post) => dispatch(addPost(post)))
        .catch(console.error);
  }, [id, dispatch]);

  return <div>{post ? <Post post={post} /> : <p>Loading....</p>}</div>;
}
