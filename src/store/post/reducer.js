import produce from "immer";
import { toast } from "react-hot-toast";
import {
  CREATE_POST_FAILED,
  CREATE_POST_SUCCESS,
  GET_ALL_AUTHOR_APPROVED_FAILED,
  GET_ALL_AUTHOR_APPROVED_SUCCESS,
  GET_ALL_AUTHOR_FAILED,
  GET_ALL_AUTHOR_PENDING_FAILED,
  GET_ALL_AUTHOR_PENDING_SUCCESS,
  GET_ALL_AUTHOR_POST_FAILED,
  GET_ALL_AUTHOR_POST_SUCCESS,
  GET_ALL_AUTHOR_SUCCESS,
  GET_LIKE_POST_FAILED,
  GET_LIKE_POST_SUCCESS,
  LIKE_POST_FAILED,
  LIKE_POST_SUCCESS,
  START_LOADING,
  STOP_LOADING,
} from "./actionTypes";

const initialState = {
  authors: null,
  isLoading: false,
  likes: null,
  errorMessage: null,
};

const Post = produce((state, action) => {
  switch (action.type) {
    //User
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case CREATE_POST_SUCCESS:
      console.log("action.payload", action.payload);
      toast.success(" Successfully");
      state.errorMessage = null;
      break;

    case CREATE_POST_FAILED:
      state.errorMessage = action.payload;
      break;

    case LIKE_POST_SUCCESS:
      console.log("action.payload", action.payload);
      toast.success(" Successfully");
      state.errorMessage = null;
      break;

    case LIKE_POST_FAILED:
      state.errorMessage = action.payload;
      break;

    case GET_LIKE_POST_SUCCESS:
      state.likes = action?.payload?.data?.like?.length;
      state.errorMessage = null;
      break;

    case GET_LIKE_POST_FAILED:
      state.errorMessage = action.payload;
      break;
    //ADMIN
    case GET_ALL_AUTHOR_POST_SUCCESS:
      console.log("action.payload", action.payload);
      state.errorMessage = null;
      break;

    case GET_ALL_AUTHOR_POST_FAILED:
      state.errorMessage = action.payload;
      break;

    case GET_ALL_AUTHOR_SUCCESS:
      console.log("action.payload", action.payload);
      state.authors = action.payload.data.getAllauthors;
      state.errorMessage = null;
      break;

    case GET_ALL_AUTHOR_FAILED:
      state.errorMessage = action.payload;
      break;

    case GET_ALL_AUTHOR_PENDING_SUCCESS:
      console.log("action.payload", action.payload.data.getAllauthors);
      state.authors = action.payload.data.getAllauthors;
      state.errorMessage = null;
      break;

    case GET_ALL_AUTHOR_PENDING_FAILED:
      state.errorMessage = action.payload;
      break;

    default:
      break;
  }
}, initialState);

export default Post;
