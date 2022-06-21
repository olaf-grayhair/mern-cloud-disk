import React from 'react';
import style from './navbar.module.scss'
import logo from '../../assets/images/cloud-logo.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/userSlice';

const Navbar = () => {
    const {isAuth, user} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const exit = () => {
        dispatch(logout())
    }
    
    return (
        <div className={style.navbar}>
            <Link to='/'>
            <img className={style.logo} src={logo} alt="" />
            </Link>
            <div className={style.login}>
                {!isAuth && <Link to='/registration' className={style.text}>Resistration</Link>}
                {!isAuth && <Link to='/login' className={style.text}>Login</Link>}
                {isAuth && <div className={style.user}>
                    <Link to={user.email} className={style.text}>{user.email}</Link>
                <span className={style.text} onClick={exit}>Exit</span>
            </div>}
            </div>
        </div>
    );
}

export default Navbar;
