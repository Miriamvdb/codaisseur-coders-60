import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts } from "../../store/feed/selectors";
import { fetchPosts } from "../../store/feed/thunk";
import "./styles.css";

const Homepage = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(selectAllPosts);
  console.log("Selected all posts?", allPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container-homepage">
      <h1>All posts</h1>
      <div className="all-posts">
        {!allPosts.length
          ? "Loading..."
          : allPosts.map((post) => {
              return (
                <div key={post.id} className="one-post">
                  <h3>{post.title}</h3>
                  <p
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    {moment(post.createdAt).format("DD-MM-YYYY")} -{" "}
                    <span>
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
                    </span>
                  </p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export { Homepage };
