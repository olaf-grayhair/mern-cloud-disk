import axios from 'axios'
import { addFile, setFiles } from '../reducers/fileSlice';


export const getFiles = (dirId) => {
    console.log(dirId, 'FETCH');
    return async (dispatch) => {
        try{
            const response = await axios.get(`http://localhost:5000/api/files${dirId ? `?parent=${dirId}` : ''}`, 
            {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}});

            dispatch(setFiles(response.data))
        }catch(e) {
            console.log(e.response.data.message, 'CATCH')
        }
    }
}

export const pushFile = (name, dirId) => {
    console.log(name, dirId, 'PUSH FILE');
    return async (dispatch) => {
        try{
            const response = await axios.post('http://localhost:5000/api/files', 
            {
                name,
                type: 'dir',
                parent: dirId,
            },
            {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}});

            dispatch(addFile(response.data))
        }catch(e) {
            console.log(e.response.data.message, 'CATCH')
        }
    }
}