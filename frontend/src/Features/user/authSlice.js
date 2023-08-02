import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : null,
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    userID: localStorage.getItem('userID') ? JSON.parse(localStorage.getItem('userID')) : null,
    userSearchResults: localStorage.getItem('userSearchResults') ? JSON.parse(localStorage.getItem('userSearchResults')) : null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            localStorage.setItem('userInfo', JSON.stringify(action.payload)),
            state.userInfo = action.payload;
        },
        saveClickedUserID: (state, action) => {
            localStorage.setItem('userID', JSON.stringify(action.payload));
            state.userID = action.payload;
        },
        saveAllUsers: (state, action)=>{
            localStorage.setItem('users', JSON.stringify(action.payload));
            state.users = action.payload
        },
        saveSearchUserResults: (state, action)=>{
            localStorage.setItem('userSearchResults', JSON.stringify(action.payload));
            state.userSearchResults = action.payload;
        }
        ,
        logout: (state, action)=>{
            state.userInfo = null;
            localStorage.removeItem('userInfo');
            localStorage.removeItem('records');
            localStorage.removeItem('users');
            localStorage.removeItem('userID');
            localStorage.removeItem('singleRecord');
        },
    }
})

export const {setCredentials, logout, saveSearchUserResults, saveClickedUserID, saveAllUsers} = authSlice.actions;

export default authSlice.reducer;