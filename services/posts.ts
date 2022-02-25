import { apiClient } from ".";
import { IPost } from "../types/post";

const oneDay = 24 * 60 * 60 * 1000;

export const postsAPI = {
  getAllPosts() {
    return apiClient.get<Array<IPost>>("/posts").then((res) =>
      res.data.map((post) => ({
        ...post,
        date: new Date(Date.now() - post.id * oneDay),
      }))
    );
  },
  getOnePost(id: number) {
    return apiClient.get<IPost>(`/posts/${id}`).then((res) => ({
      ...res.data,
      date: new Date(Date.now() - res.data.id * oneDay),
    }));
  },
};
