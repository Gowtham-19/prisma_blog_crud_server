
const prisma = require("../prisma/index")
const cookieToken = require("../commonFiles/cookies_token")

//user signup
const signup = async(req,res) => {
    try{
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            res.status(400).json({
                data:"please provide proper details"
            })
        }
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        })

        //sending a token to user
        cookieToken(user,res)

    }catch(error){
        console.log("error in sing up:",error)
    }
}

//login user

const login = async (req,res) => {
    try {
        const {email,password} = req.body;

        //find a user by email
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        })
        //when there is no user
        if(!user){
            res.status(400).json({
                data:"user doesn't exist"
            })
        }
        if(user["password"] != password){
            res.status(400).json({
                data:"incorrect password",
            })
        }else{
            //sending cookie to user
            cookieToken(user,res)
        }
    } catch (error) {
        res.status(500).json({
            data:"login failed"
        })
    }
}

//logout user
const logout = async(req,res) => {
    try {
        res.clearCookie('token')
        res.status(200).json({
            succes:true
        })        
    } catch (error) {
        res.status(500).json({
            data:"logout failed",
            error:error
        })
    }
}

module.exports = {signup,login,logout}