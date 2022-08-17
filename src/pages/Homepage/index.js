import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
                  <NavLink
                    to={`/post/${post.id}`}
                    className="link-post-details"
                  >
                    <h3>{post.title}</h3>
                  </NavLink>
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
        {/* 4. Add a button and dispatch the thunk to fetch more data */}
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            marginTop: "1rem",
            marginBottom: "1rem",
            paddingLeft: "-0rem",
          }}
          onClick={() => dispatch(fetchPosts())}
        >
          Load more posts..
        </button>
      </div>
    </div>
  );
};

export { Homepage };
