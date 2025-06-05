import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  profile:false,
  showChat: false,
  socket: null,
  onlineUsers: [],
  token : "",
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
      state.token = action.payload.token
      state.socket = action.payload.socket
      state.onlineUsers = action.payload.onlineUsers

    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
      state.token = null
      state.socket = null
      state.onlineUsers = []
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;

    },
    signOutUserStart: (state) => {
      state.loading = true;

    },
    signOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
      state.token = null
      state.socket = null
    },
    signOutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;

    },
    setAndUnSetProfile: (state)=>{
      state.profile = !state.profile


    },
    unSetProfile: (state)=>{
      state.profile = false

    },
    setAndUnsetChat: (state)=>{
      state.showChat = !state.showChat
      
    },
    unSetChat: (state)=>{
      state.showChat = false
    },

  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserFailure,
  updateUserSuccess,
  updateUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  signOutUserFailure,
  signOutUserSuccess,
  signOutUserStart,
  setAndUnSetProfile,
  unSetProfile,
  unSetChat, 
  setAndUnsetChat
} = userSlice.actions;

export default userSlice.reducer;