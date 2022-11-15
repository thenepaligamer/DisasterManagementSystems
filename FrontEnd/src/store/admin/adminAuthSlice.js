import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    token: null,
};
const adminAuthSlice = createSlice({
    name: "adminAuthSlice",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.isLoggedIn = true;
        },
        setToken: (state, { payload }) => {
            state.token = payload;
        },
    },
});
export const { login, setToken } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
