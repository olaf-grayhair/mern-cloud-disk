import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, pushFile } from '../../actions/file';
import { addFile, popupState, remNav, setCurrentDir } from '../../reducers/fileSlice';
import NavButton from '../../utils/nav-button/NavButton';
import Popup from '../popup/Popup';
import style from './disk.module.scss'
import FileList from './fileList/FileList'

const Disk = () => {
    const dispatch = useDispatch()
    const {files, currentDir, popupDisplay, dirStack } = useSelector((state) => state.file)
    
    const directories = files.map(dir => <FileList {...dir} key={dir._id}/>)

    const stack = dirStack.map(el => 
    <NavButton {...el} key={el._id} 
    />)
/////////
    useEffect(() => {
        dispatch(getFiles(currentDir))
        console.log('useEffect');
    }, [currentDir]);

    const openPopup = () => {
        dispatch(popupState(true))
    }

    const closePopup = () => {
        dispatch(popupState(false))
    }

    const createDir = (dirName, currentDir) => {
        dispatch(pushFile(dirName, currentDir))
        console.log(dirName, 'createDir');
    }

    console.log(dirStack, 'backDir');

    const back = () => {
        if (dirStack.length > 1) {
            const popNav = dirStack[dirStack.length - 2]._id
            dispatch(remNav())
            dispatch(getFiles(popNav))
        } else {
            dispatch(getFiles(''))
        }

        // const backDir = dirStack.pop()
        // dispatch(setCurrentDir(backDir))
    }
    return (
        <div className={style.disk}>
            <div className={style.nav__wrap}>
                {dirStack < 1 ? <NavButton name={'My disk'}/> : stack}
            </div>
            <div className={style.btn__block}>
                <button onClick={back}>Back</button>
                <button onClick={openPopup}>New folder</button>
            </div>
            <div className={style.dirs}>
                {directories}
            </div>
            <Popup 
                popupDisplay={popupDisplay}
                cansel={closePopup}
                create={createDir}
                currentDir={currentDir}
            />
        </div>
    );
}

export default Disk;
