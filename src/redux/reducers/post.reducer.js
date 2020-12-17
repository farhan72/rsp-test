const {
  POST_LOADING,
  POST_SUCCESS,
  POST_FAILURE,
  GET_PROJECTS,
} = require("../actions/postList.action");

const initialState = {
  activities: [],
  loading: true,
  projects: [],
  error: null,
};

const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POST_SUCCESS:
      return {
        ...state,
        activities: action.data.postList,
        projects: action.data.caseStudies,
        loading: action.loading,
      };
    case POST_FAILURE:
      return {
        ...state,
        activities: [],
        projects: [],
        error: action.error,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default postReducers;
