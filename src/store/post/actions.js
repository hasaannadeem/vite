import {
  STOP_LOADING,
  START_LOADING,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  GET_ALL_AUTHOR_POST,
  GET_ALL_AUTHOR_POST_SUCCESS,
  GET_ALL_AUTHOR_POST_FAILED,
  GET_ALL_AUTHOR_PENDING,
  GET_ALL_AUTHOR_PENDING_SUCCESS,
  GET_ALL_AUTHOR_PENDING_FAILED,
  GET_ALL_AUTHOR_APPROVED,
  GET_ALL_AUTHOR_APPROVED_SUCCESS,
  GET_ALL_AUTHOR_APPROVED_FAILED,
  GET_ALL_AUTHOR,
  GET_ALL_AUTHOR_SUCCESS,
  GET_ALL_AUTHOR_FAILED,
  LIKE_POST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILED,
  GET_LIKE_POST,
  GET_LIKE_POST_SUCCESS,
  GET_LIKE_POST_FAILED,
} from "./actionTypes";

//Admin
//get all author post action
export const getAuthorPost = (data, nav) => {
  return {
    type: GET_ALL_AUTHOR_POST,
    payload: data,
    nav: nav,
  };
};

//get all author post success action
export const getAuthorPostSuccess = (data) => {
  return {
    type: GET_ALL_AUTHOR_POST_SUCCESS,
    payload: data,
  };
};

//get all author post failed action
export const getAuthorPostFailed = (data) => {
  return {
    type: GET_ALL_AUTHOR_POST_FAILED,
    payload: data?.data?.message,
  };
};

//get all author  action
export const getAuthor = () => {
  return {
    type: GET_ALL_AUTHOR,
  };
};

//get all author request pending success action
export const getAuthorSuccess = (data) => {
  return {
    type: GET_ALL_AUTHOR_SUCCESS,
    payload: data,
  };
};

//get all author request pending failed action
export const getAuthorFailed = (data) => {
  return {
    type: GET_ALL_AUTHOR_FAILED,
    payload: data?.data?.message,
  };
};

//get all author request pending action
export const getAuthorApprovedPending = (data) => {
  return {
    type: GET_ALL_AUTHOR_PENDING,
    payload: data,
  };
};

//get all author request pending success action
export const getAuthorApprovedPendingSuccess = (data) => {
  return {
    type: GET_ALL_AUTHOR_PENDING_SUCCESS,
    payload: data,
  };
};

//get all author request pending failed action
export const getAuthorApprovedPendingFailed = (data) => {
  return {
    type: GET_ALL_AUTHOR_PENDING_FAILED,
    payload: data?.data?.message,
  };
};

//User
//create post action
export const createPost = (data, nav) => {
  return {
    type: CREATE_POST,
    payload: data,
    nav: nav,
  };
};

//create post success action
export const createPostSuccess = (data) => {
  return {
    type: CREATE_POST_SUCCESS,
    payload: data,
  };
};

//create post failed action
export const createPostFailed = (data) => {
  return {
    type: CREATE_POST_FAILED,
    payload: data?.data?.message,
  };
};

export const likePost = (data, nav) => {
  return {
    type: LIKE_POST,
    payload: data,
    nav: nav,
  };
};

//like post success action
export const likePostSuccess = (data) => {
  return {
    type: LIKE_POST_SUCCESS,
    payload: data,
  };
};

//like post failed action
export const likePostFailed = (data) => {
  return {
    type: LIKE_POST_FAILED,
    payload: data?.data?.message,
  };
};

export const getLikePost = (data) => {
  return {
    type: GET_LIKE_POST,
    payload: data,
  };
};

//like post success action
export const getLikePostSuccess = (data) => {
  return {
    type: GET_LIKE_POST_SUCCESS,
    payload: data,
  };
};

//like post failed action
export const getLikePostFailed = (data) => {
  return {
    type: GET_LIKE_POST_FAILED,
    payload: data?.data?.message,
  };
};

//start loading action
export const startLoading = (data) => ({
  type: START_LOADING,
  payload: data,
});

//stop loading action
export const stopLoading = (data) => ({
  type: STOP_LOADING,
  payload: {
    action: data,
  },
});
