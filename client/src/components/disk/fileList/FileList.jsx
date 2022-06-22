import React from 'react';
import style from './filelist.module.scss'
import dir from '../../../assets/images/dir.png'
import { addNav, setCurrentDir } from '../../../reducers/fileSlice';
import { useDispatch } from 'react-redux';


const FileList = ({name, type, size, date,  _id}) => {
    const dispatch = useDispatch()

    const changePage = () => {
        dispatch(setCurrentDir(_id))

        const pushItem = {
            name,
            _id
        }
        dispatch(addNav(pushItem))
    }
    return (
        <div className={style.fileList} 
            onClick={changePage}>
            <img src={dir} className={style.logo} alt="" />
            <span>{name}</span>
            <span>{date.slice(0, 10)}</span>
            <span>{type === 'dir' ? 'File folder' : 'dir'}</span>
            <span>{size} KB</span>
        </div>
    );
}

export default FileList;
