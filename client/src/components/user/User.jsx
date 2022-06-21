import React from 'react';
import {useNavigate} from "react-router-dom";
import style from './user.module.scss'

const User = () => {
    const history = useNavigate()
    const returnPrev = () => {
      history(-1)
    }

    return (
        <div className={style.user}>
            <h2>USER PAGE</h2>
            <button onClick={returnPrev}>BACK</button>
        </div>
    );
}

export default User;
