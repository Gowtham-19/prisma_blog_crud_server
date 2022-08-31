const getjwtToken = require("../services/getJwtToken")

const cookieToken = (user, res) => {
    const token = getjwtToken(user.id);
    const options = {
        expires: new Date(
            Date.now() + 3 * 24 * 60 * 60 * 1000
        ),
        httpOnly:true
    }
    user.password = undefined
    res.status(200).cookie('token',token,options).json({
        success:true,
        token:token,
        user:user
    })
}


module.exports = cookieToken;