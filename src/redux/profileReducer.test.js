import profileReducer, { addPost, deletePost } from "./profileReducer";

const state = {
  myPosts: {
    posts: [
      { id: 1, message: "My first post", likesCount: 143 },
      { id: 2, message: "This post was made by props", likesCount: 16 },
      { id: 3, message: "Вернула стену вместо Дурова", likesCount: 14 },
    ],
  },
};

it("posts length should be increased", () => {
  const action = addPost("new post");
  const newState = profileReducer(state, action);
  expect(newState.myPosts.posts.length).toBe(4);
});

it("new post message should be correct", () => {
  const action = addPost("new post");
  const newState = profileReducer(state, action);
  expect(newState.myPosts.posts[3].message).toBe("new post");
});

it("posts length should be decreased", () => {
  const action = deletePost(2);
  const newState = profileReducer(state, action);
  expect(newState.myPosts.posts.length).toBe(2);
});

it("posts length shouldn't be decreased if id is incorrect", () => {
  const action = deletePost(140);
  const newState = profileReducer(state, action);
  expect(newState.myPosts.posts.length).toBe(3);
})
