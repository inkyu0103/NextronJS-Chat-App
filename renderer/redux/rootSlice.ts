import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  userName: null,
  photoUrl: null,
  friendsList: [],
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload.email;
      state.userName = action.payload.userName;
      state.photoUrl = action.payload.photoUrl;
      state.friendsList = action.payload.friendsList;
    },
    logoutUser: (state, action) => {
      state = initialState;
    },

    addFriend: (state, action) => {
      state.friendsList = action.payload.friendsList;
    },
  },
});

const { reducer, actions } = rootSlice;

export default reducer;
export const { addFriend, loginUser, logoutUser } = actions;
