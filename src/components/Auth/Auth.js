// // import { createSlice } from "@reduxjs/toolkit";
// import Access_Token from "./Access_Token";
// // // import { login as loginApi } from "../api/auth";

// // const initialState = {
// //   user: null,
// // };

// // const slice = createSlice({
// //   name: "auth",
// //   initialState,
// //   reducers: {
// //     setUser: (state, action) => {
// //       return Object.assign({}, state, { user: action.payload });
// //     }
// //   }
// // });

// // export default slice.reducer;

// // export const isAuthSelector = state => state.auth.user !== null;

// export function login() {
//   return async function(dispatch) {
//     const user = await Access_Token();
// //     dispatch(slice.actions.setUser(user));
//   }
// }