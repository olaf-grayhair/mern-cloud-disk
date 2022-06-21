import React from 'react';
import style from './filelist.module.scss'
import dir from '../../../assets/images/dir.png'


const FileList = ({name, type, size, date}) => {
    return (
        <div className={style.fileList}>
            <img src={dir} className={style.logo} alt="" />
            <span>{name}</span>
            <span>{date.slice(0, 10)}</span>
            <span>{type === 'dir' ? 'File folder' : 'dir'}</span>
            <span>{size} KB</span>
        </div>
    );
}

export default FileList;
