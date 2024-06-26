const { g_Service } = require("../Services")

const create_G = async(req,res) => {
    try {
        const data = req.body
        const new_g = await g_Service.create_G(data)

        res.status(200).json({
            message:"Created",
            success:true,
            data:new_g
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const list_G = async(req,res) => {
    try {
        const new_g = await g_Service.list_G()

        res.status(200).json({
            message:"Founded",
            success:true,
            data:new_g
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const delete_G = async(req,res) => {
    try {
        const id = req.params.id
        const new_g = await g_Service.delete_G(id)

        res.status(200).json({
            message:"Deleted",
            success:true,
            data:new_g
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const update_G = async(req,res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await g_Service.update_G(id,data)

        if(!Result){
            throw new Error("not updated")
        }

        res.status(200).json({
            message:"Updated",
            success:true,
            data:data
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

module.exports = {
    create_G,
    list_G,
    delete_G,
    update_G
} 