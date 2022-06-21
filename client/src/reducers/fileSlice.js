import {createSlice} from "@reduxjs/toolkit"



const fileSlice = createSlice({
    name: 'file',
    initialState: {
        files: [],
        currentDir: null
    },

    reducers: {
        setFiles(state, action) {
            state.files = action.payload
        },
        setCurrentDir(state, action) {
            debugger
            state.currentDir = action.payload.id
        },
    }
})

export default fileSlice.reducer
export const {setFiles, setCurrentDir} = fileSlice.actions
// cold@777.mail.ru