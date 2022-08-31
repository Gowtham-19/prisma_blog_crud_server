const prisma = require("../prisma/index")

const jwt = require('jsonwebtoken')

const isLoggedIn = async(req,res,next) => {
    try {
        const token = req.cookies.token 
        if(!token){
            res.status(400).json({
                data:"user not logged in"
            })
            next()
        }else{
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user = await prisma.user.findUnique({
                where:{
                    id:decoded.userId
                }
            })
            next()
        }

    } catch (error) {
        
    }
}

module.exports = {isLoggedIn}