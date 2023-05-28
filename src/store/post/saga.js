import axios from "../../axios/AxiosConfig";
import { fork, put, all, takeLatest } from "redux-saga/effects";
import {
  createPostFailed,
  createPostSuccess,
  getAuthorApprovedPendingFailed,
  getAuthorApprovedPendingSuccess,
  getAuthorFailed,
  getAuthorPendingFailed,
  getAuthorPendingSuccess,
  getAuthorPostFailed,
  getAuthorPostSuccess,
  getAuthorSuccess,
  getLikePost,
  getLikePostFailed,
  getLikePostSuccess,
  likePostFailed,
  likePostSuccess,
  startLoading,
  stopLoading,
} from "./actions";
import {
  CREATE_POST,
  GET_ALL_AUTHOR,
  GET_ALL_AUTHOR_PENDING,
  GET_ALL_AUTHOR_POST,
  GET_LIKE_POST,
  LIKE_POST,
} from "./actionTypes";

//Login User Saga

function* createNewPost({ payload, nav }) {
  try {
    yield put(startLoading());
    const response = yield axios.post("/user/createPost", payload);
    nav("/");
    yield put(createPostSuccess(response.data));
  } catch (error) {
    yield put(createPostFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

function* getAllPostsAdmin({ payload, nav }) {
  try {
    yield put(startLoading());
    const response = yield axios.get("/user/createPost");
    nav("/");
    yield put(getAuthorPostSuccess(response.data));
  } catch (error) {
    yield put(getAuthorPostFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

function* getAllAuthor() {
  try {
    yield put(startLoading());
    const response = yield axios.get("/admin/author/getAll");
    yield put(getAuthorSuccess(response.data));
  } catch (error) {
    yield put(getAuthorFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

function* getAllPendingRequestAuthor({ payload }) {
  console.log(
    "🚀 ~ file: saga.js:65 ~ function*getAllPendingRequestAuthor ~ payload:",
    payload
  );
  try {
    yield put(startLoading());
    const response = yield axios.get(`/admin/author/getAll?query=${payload}`);
    yield put(getAuthorApprovedPendingSuccess(response.data));
  } catch (error) {
    yield put(getAuthorApprovedPendingFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

function* likePost({ payload }) {
  try {
    yield put(startLoading());
    const response = yield axios.post(`/user/likePost`, payload);
    console.log(
      "🚀 ~ file: saga.js:91 ~ function*likePost ~ response:",
      response
    );
    yield put(likePostSuccess(response.data));
    yield put(getLikePost(response.data.data.createLike.PostId));
  } catch (error) {
    yield put(likePostFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

function* getLikesPost({ payload }) {
  try {
    yield put(startLoading());
    const response = yield axios.get(`/user/getAllPostLikes?query=${payload}`);
    yield put(getLikePostSuccess(response.data));
  } catch (error) {
    yield put(getLikePostFailed(error.response));
  } finally {
    yield put(stopLoading());
  }
}

function* watchGetLikePost() {
  yield takeLatest(GET_LIKE_POST, getLikesPost);
}
//get All Authors
function* watchLikePost() {
  yield takeLatest(LIKE_POST, likePost);
}

//get All Authors
function* watchGetAllAuthors() {
  yield takeLatest(GET_ALL_AUTHOR, getAllAuthor);
}

//get Author/Pending Authors
function* watchGetAuthorsApprovedPending() {
  yield takeLatest(GET_ALL_AUTHOR_PENDING, getAllPendingRequestAuthor);
}

//create post Watcher
function* watchGetAllPostAdmin() {
  yield takeLatest(GET_ALL_AUTHOR_POST, getAllPostsAdmin);
}

//create post Watcher
function* watchCreatePost() {
  yield takeLatest(CREATE_POST, createNewPost);
}

export default function* postSaga() {
  yield all([
    fork(watchCreatePost),
    fork(watchGetAllPostAdmin),
    fork(watchGetAllAuthors),
    fork(watchGetAuthorsApprovedPending),
    fork(watchLikePost),
    fork(watchGetLikePost),
  ]);
}
