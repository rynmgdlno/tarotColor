import { createSlice } from '@reduxjs/toolkit';

import { CurrentUser } from '@types';

type UserState = {
  currentUser: CurrentUser;
  thirdParty: boolean | string;
}

const initialState: UserState = {
  currentUser: null,
  thirdParty: false
};

export const user = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    setThirdParty: (state, action) => {
      state.thirdParty = action.payload
    }
  }
})

export const { setCurrentUser, setThirdParty } = user.actions;
export default user.reducer;