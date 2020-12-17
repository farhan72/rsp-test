import { getPostData } from "../../api/services/blogService";

export const POST_LOADING = "POST_LOADING";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

const fetchPostData = () => {
  return (dispatch) => {
    dispatch({ type: POST_LOADING });
    getPostData()
      .then((result) => {
        dispatch({
          type: POST_SUCCESS,
          data: result.data,
          loading: false,
        });
      })
      .catch((error) =>
        dispatch({
          type: POST_FAILURE,
          error: error.response.data,
          loading: false,
        })
      );
  };
};

export { fetchPostData };
