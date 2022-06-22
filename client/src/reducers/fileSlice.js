import {createSlice} from "@reduxjs/toolkit"



const fileSlice = createSlice({
    name: 'file',
    initialState: {
        files: [],
        currentDir: null,
        popupDisplay: false,
        dirStack: [{
            name: "My disk",
            id: null
        }]
    },

    reducers: {
        setFiles(state, action) {
            state.files = action.payload
        },
        setCurrentDir(state, action) {
            state.currentDir = action.payload
        },
        addFile(state, action) {
            state.files.push(action.payload)
        },
        popupState(state, action) {
            state.popupDisplay = action.payload
        },
        addNav(state, action) {
            state.dirStack.push(action.payload)
        },
        remNav(state, action) {
            state.dirStack.pop(action.payload)
        },
    }
})

export default fileSlice.reducer
export const {setFiles, setCurrentDir, addFile, popupState, addNav, remNav} = fileSlice.actions
// cold@777.mail.ru