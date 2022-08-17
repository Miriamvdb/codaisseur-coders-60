import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostDetails } from "../../store/postPage/thunk";
import "./styles.css";

const PostDetailspage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostDetails(id));
  }, [dispatch, id]);

  return (
    <div className="container-post-detailspage">
      <h1>Post details</h1>
    </div>
  );
};

export { PostDetailspage };
