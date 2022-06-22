import React from 'react';
import { useDispatch } from 'react-redux';
import { remNav, setCurrentDir } from '../../reducers/fileSlice';
import style from './navbutton.module.scss'

const NavButton = ({name, _id, action}) => {
    const dispatch = useDispatch()

    console.log(name, _id);
    const handleClick = () => {
        console.log(_id, '_id');
        // e.target.innerHTML
        dispatch(setCurrentDir(_id))
        dispatch(remNav())
    }
    return (
        <div className={style.navbutton} 
        onClick={handleClick}>{name}</div>
    );
}

export default NavButton;
