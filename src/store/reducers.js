import { combineReducers } from "redux";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// Front
// import Layout from './layout/reducer';

// Authentication Module
import auth from "./auth/reducer";
import post from "./post/reducer";
import authorize from "./autorization/reducer";

// import persistReducer from 'redux-persist/es/pesistReducer';
// import AuthReducer

// const authPersistConfig = {
//     key: 'auth',
//     storage: storage,
//     keyPrefix: 'redux-',
//     whitelist: ['auth']
//   };

const rootReducer = () =>
  combineReducers({
    auth,
    post,
    authorize,
  });

export default rootReducer;
