import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false,
}

const adminAuthSlice = createSlice({
    name: 'adminAuthSlice',
    initialState,
});
console.log(adminAuthSlice)
export default adminAuthSlice.reducer;