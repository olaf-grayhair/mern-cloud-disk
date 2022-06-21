const fs = require('fs')
const file = require('../models/File')
const config = require('config')
const path = require('path');

class FileService {

    createDir(file) {
        const filePath = `${config.get(path.normalize('filePath'))}\\${file.user}\\${file.path}`
        
        console.log(config.get(path.normalize('filePath')));

        return new Promise(((resolve, reject) => {
            try {
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath)
                    // fs.mkdirSync(filePath, { recursive: true })
                    return resolve({message: 'File was created'})
                } else {
                    return reject({message: "File already exist"})
                }
            } catch (e) {
                return reject({message: 'File error in Fileservice'})
            }
        }))
    }

}


module.exports = new FileService()