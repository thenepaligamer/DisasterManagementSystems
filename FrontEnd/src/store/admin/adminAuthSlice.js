import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false,
}
const adminAuthSlice = createSlice({
    name: 'adminAuthSlice',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        }
    },

});
export const {login} = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
