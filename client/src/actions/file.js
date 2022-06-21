import axios from 'axios'
import { setFiles } from '../reducers/fileSlice';


export const getFiles = () => {
    return async (dispatch) => {
        try{
            const response = await axios.get('http://localhost:5000/api/files', 
            {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}});

            console.log(response, 'fetch');
            dispatch(setFiles(response.data))
            // localStorage.setItem('token',response.data.token)
        }catch(e) {
            console.log(e.response.data.message, 'CATCH')
            localStorage.removeItem('token')
        }
    }
}