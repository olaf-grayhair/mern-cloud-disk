import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../../actions/file';
import style from './disk.module.scss'
import FileList from './fileList/FileList'

const Disk = () => {
    const dispatch = useDispatch()
    const directories = useSelector((state) => state.file.files).map(dir => <FileList {...dir} key={dir._id}/>)
    
    // const directories = [        
    //     {
    //     "_id": "62b1bfe3845c7df8459772ec",
    //     "name": "new_dir",
    //     "type": "dir",
    //     "size": 0,
    //     "path": "new_dir",
    //     "date": "2022-06-21T12:51:04.858Z",
    //     "user": "62b1bf13845c7df8459772e0",
    //     "childs": [],
    //     "__v": 0
    // },
    // {
    //     "_id": "62b1c0ae845c7df8459772f4",
    //     "name": "new_second_dir",
    //     "type": "dir",
    //     "size": 0,
    //     "path": "new_second_dir",
    //     "date": "2022-06-21T12:51:04.858Z",
    //     "user": "62b1bf13845c7df8459772e0",
    //     "childs": [],
    //     "__v": 0
    // }].map(dir => <FileList {...dir} key={dir._id}/>)
    console.log(directories, 'DISK');

    useEffect(() => {
        dispatch(getFiles())
    }, []);

    return (
        <div className={style.disk}>
            <div className={style.btn__block}>
                <button>Back</button>
                <button>New folder</button>
            </div>
            <div className={style.dirs}>
                {directories}
            </div>
            
        </div>
    );
}

export default Disk;
