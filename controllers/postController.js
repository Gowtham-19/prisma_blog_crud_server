
const prisma = require("../prisma/index")

// create a new post

const createPost = async (req, res) => {
    try {
        const { slug, title, body, authorId } = req["body"]
        const result = await prisma.post.create({
            data: {
                slug,
                title,
                body,
                author: { connect: { id: authorId } }
            }
        })
        res.status(200).json({
            message:"post created",
            success:true            
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "post creation failed"
        })
    }
}

//update a post

const updatePost = async (req,res) => {
    const {id} = req["params"];
    const {title,body} = req["body"];

    try {
        const result = await prisma.post.update({
            where:{id:id},
            data:{
                title,
                body
            }
        })
        res.status(200).json({
            success:true,
            message:"post updated"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"post update failed"
        })
    }
}

//delete a post

const deletePost = async(req,res) => {
    try {
        const {id} = req.params
        await prisma.post.delete({
            where:{id:id}
        })
        res.status(200).json({
            success:true,
            message:"post deleted"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"deletion failed"
        })        
    }
}

// fecth all posts
const gatAllPosts = async (req,res) => {
    try {
        const result = await prisma.post.findMany()
        res.status(200).json({
            success:true,
            data:result
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"failed to fetch posts"
        })
    }
}
module.exports = {createPost,updatePost,deletePost,gatAllPosts}