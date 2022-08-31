const jswt = require("jsonwebtoken")

const getjwtToken = (userId) => {
    return jswt.sign({userId:userId},process.env.JWT_SECRET,{expiresIn:'1 day'})
}

module.exports = getjwtToken;