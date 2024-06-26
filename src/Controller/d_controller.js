const { d_Service } = require("../Services")

const create_D = async(req,res) => {
    try {
        const data = req.body
        const new_d = await d_Service.create_D(data)

        res.status(200).json({
            message:"Created",
            success:true,
            data:new_d
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const list_D = async(req,res) => {
    try {
        const new_d = await d_Service.list_D()

        res.status(200).json({
            message:"Founded",
            success:true,
            data:new_d
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const delete_D = async(req,res) => {
    try {
        const id = req.params.id
        const new_d = await d_Service.delete_D(id)

        res.status(200).json({
            message:"Deleted",
            success:true,
            data:new_d
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const update_D = async(req,res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await d_Service.update_D(id,data)

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
    create_D,
    list_D,
    delete_D,
    update_D
} 