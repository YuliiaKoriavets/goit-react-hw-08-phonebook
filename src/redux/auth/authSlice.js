import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './authOperations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null},
  token: null,
  isLoggedIn: false,
  // isFetchingCurrentUser: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action){
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
    },
    [logIn.fulfilled](state, action){
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
    },
    [logOut.fulfilled](state, action){
      state.user={ name: null, email: null}
      state.token=null
      state.isLoggedIn=false
    },
    [fetchCurrentUser.pending](state){
      // state.isFetchingCurrentUser=true
    },
    [fetchCurrentUser.fulfilled](state, action){
      state.user=action.payload
      state.isLoggedIn=true
      // state.isFetchingCurrentUser=false
    },
    [fetchCurrentUser.rejected](state){
      // state.isFetchingCurrentUser=false
    }
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authReducer = authSlice.reducer

export const persistedReducerAuth = persistReducer(persistConfig, authReducer);
