import axios from 'axios'
import { log, reg } from '../reducers/userSlice'

export const registration = async (email, password) => {
    try{
        const response = await axios.post('http://localhost:5000/api/auth/registration', {
            email,
            password
        })
        alert(response.data.message)
        console.log('registration');

    }catch(e) {
        console.log(e.response.data.message);
        alert(e.response.data.message)
    }
}

export const login = (email, password) => {
    return async (dispatch) => {

        try{
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            });

            dispatch(log(response.data.user))
            console.log(response.data.user, 'TRY');
            localStorage.setItem('token',response.data.token)
        }catch(e) {
            // alert(e.response.data.message)
            console.log(e.response.data.message, 'CATCH')
        }
    }
}

export const auth = () => {
    return async (dispatch) => {
        try{
            const response = await axios.get('http://localhost:5000/api/auth/auth', 
            {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}});

            dispatch(log(response.data.user))
            localStorage.setItem('token',response.data.token)
        }catch(e) {
            console.log(e.response.data.message, 'CATCH')
            localStorage.removeItem('token')
        }
    }
}