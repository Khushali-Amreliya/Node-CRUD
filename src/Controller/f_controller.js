const { f_Service } = require("../Services")

const create_F = async(req,res) => {
    try {
        const data = req.body
        const new_f = await f_Service.create_F(data)

        res.status(200).json({
            message:"Created",
            success:true,
            data:new_f
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const list_F = async(req,res) => {
    try {
        const new_f = await f_Service.list_F()

        res.status(200).json({
            message:"Founded",
            success:true,
            data:new_f
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const delete_F = async(req,res) => {
    try {
        const id = req.params.id
        const new_f = await f_Service.delete_F(id)

        res.status(200).json({
            message:"Deleted",
            success:true,
            data:new_f
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const update_F = async(req,res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await f_Service.update_F(id,data)

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
    create_F,
    list_F,
    delete_F,
    update_F
} 