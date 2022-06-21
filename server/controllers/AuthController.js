const User = require('../models/User')
const {check, validationResult} = require("express-validator")
const bcrypt = require("bcrypt")//password hashing
const config = require('config')
const jwt = require('jsonwebtoken')
const fileService = require('../services/FileSevice')
const File = require('../models/File')

class AuthController {
    async create(req, res) {
        try{
            const errors = validationResult(req)
            console.log(errors);
            if(!errors.isEmpty()) {
                return res.status(400).json({message: 'Uncorrect request', errors})
            }
    
            const {email, password} = req.body
    
            const candidate = await User.findOne({email})
            
            if(candidate) {
                return res.status(400).json({message: `User with email ${email} already exist`})
            }
    
            const hashPassword = await bcrypt.hash(password, 8)
            const user = new User({email, password: hashPassword})
            await user.save()
            // await fileService.createDir(new File({user:user.id, name: ''}))
            await fileService.createDir(new File({user:user.id, name: ''}))
            return res.json({message: 'User was created !!!'})
    
        }catch (e) {
            console.log(e,'aith');
        }
    }

    async login(req, res) {
        try{
            const {email, password} = req.body
            const user = await User.findOne({email})
            console.log(user, 'login');
            if(!user) {
                return res.status(404).json({message: 'user not found'})
            }

            const isValidpassword = bcrypt.compareSync(password, user.password)
            if(!isValidpassword) {
                return res.status(404).json({message: 'ivalid password'})
            }

            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })
        }catch (e) {
            console.log(e);
            req.send({message: 'server error !!!'})
        }
    }
    
    async auth(req, res) {
        try{
            const user = await User.findOne({_id:req.user.id})
            console.log(user);

            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })
        }catch (e) {
            console.log(e);
            req.send({message: 'server error !!!'})
        }
    }
}

// export default new AuthController();
module.exports =  new AuthController();
