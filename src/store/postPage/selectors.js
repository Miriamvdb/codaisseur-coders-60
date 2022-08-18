export const selectPostAndComments = (reduxState) => {
  return reduxState.postPage.loading
    ? // returns null if the post is still loading
      null
    : // returns an object of the shape { post, comments } if the post is done loading
      {
        post: reduxState.postPage.post,
        comments: reduxState.postPage.comments,
      };
};
