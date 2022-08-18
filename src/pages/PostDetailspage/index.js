import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPostAndComments } from "../../store/postPage/selectors";
import { fetchPostDetails } from "../../store/postPage/thunk";
import "./styles.css";

const PostDetailspage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const postAndComments = useSelector(selectPostAndComments);
  console.log("Post and comments? ", postAndComments);

  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [dispatch, id]);

  if (!postAndComments) return <div>"Loading..."</div>;
  const { post, comments } = postAndComments;

  return (
    <div className="container-post-detailspage">
      <h1>{post.title}</h1>
      <p>
        By <b>{post.developer.name}</b> &bull;{" "}
        {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
        {post.tags.map((tag) => {
          return (
            <span
              key={tag.id}
              style={{
                color: "tomato",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              {tag.tag}
            </span>
          );
        })}
      </p>
      <p>{post.content}</p>
      <br />
      <hr />
      <h2>Comments</h2>
      {comments.length === 0 ? (
        <p>
          <em>No comments lefts yet..</em>
        </p>
      ) : (
        comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>
                By <b>{comment.developer.name}</b> &bull;{" "}
                {moment(comment.createdAt).format("DD-MM-YYYY")}
              </p>
              <p>{comment.text}</p>
              <br />
            </div>
          );
        })
      )}
    </div>
  );
};

export { PostDetailspage };
