import {createSlice} from "@reduxjs/toolkit"



const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        isAuth: false,
        count: null,
    },

    reducers: {
        log(state, action) {
            state.user = action.payload
            state.isAuth = true
        },
        increment(state) {
            state.count = state.count + 1
        },
        logout(state, action) {
            localStorage.removeItem('token')
            state.user = {}
            state.isAuth = false
        },
    }
})

export default userSlice.reducer
export const {log, increment, logout} = userSlice.actions
