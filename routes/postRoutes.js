const express = require("express")
const { createPost, updatePost, deletePost,gatAllPosts } = require("../controllers/postController")
const router = express.Router()

const {isLoggedIn} = require('../middleware/checkLogin')


router.route('/create').post(isLoggedIn,createPost)

router.route('/update/:id').put(isLoggedIn,updatePost)

router.route('/delete/:id').delete(isLoggedIn,deletePost)

router.route('/getposts').get(isLoggedIn,gatAllPosts)
module.exports = router;