import { IPost } from "../../types/post";
import { RootState } from "../store";

type Actions =
  | { type: "SET_POSTS"; payload: IPost[] }
  | { type: "ADD_POST"; payload: IPost };

interface PostsState {
  ids: number[];
  entities: Record<number, IPost>;
}

export const postsReducer = (
  state: PostsState = { ids: [], entities: {} },
  action: Actions
): PostsState => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ids: action.payload.map((p) => p.id),
        entities: action.payload.reduce((acc, post) => {
          acc[post.id] = post;
          return acc;
        }, {}),
      };
    case "ADD_POST":
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};

export const setPosts = (posts: IPost[]) => ({
  type: "SET_POSTS",
  payload: posts,
});

export const addPost = (post: IPost) => ({
  type: "ADD_POST",
  payload: post,
});

export const postsSelector = (state: RootState) =>
  state.posts.ids.map((id) => state.posts.entities[id]);
export const postSelector = (id: number) => (state: RootState) =>
  state.posts.entities[id];
