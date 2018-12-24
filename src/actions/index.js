export const newPost = (post) => {
  return {
    type: "NEW_POST",
    payload: post
  }
};
export const deletePost = (post) => {
  return {
    type: "DELETE_POST",
    payload: post
  }
};
