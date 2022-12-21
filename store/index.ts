import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialFetchState = {
  fetch: true,
};
const fetchSlice = createSlice({
  name: "fetch",
  initialState: initialFetchState,

  reducers: {
    changeFetch(state) {
      state.fetch = !state.fetch;
    },
  },
});

const store = configureStore({ reducer: { fetch: fetchSlice.reducer } });
export const fetchactions = fetchSlice.actions;
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
