import React from 'react';
import style from './file.module.scss'

const File = () => {
    return (
        <div className={style.file}>
            <img src={dir} className={style.logo} alt="" />
            <span>{name}</span>
            <span>{date.slice(0, 10)}</span>
            <span>{type === 'dir' ? 'File folder' : 'dir'}</span>
            <span>{size} KB</span>
        </div>
    );
}

export default File;
