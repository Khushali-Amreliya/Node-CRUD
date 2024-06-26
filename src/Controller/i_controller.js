const { i_Service } = require("../Services")

const create_I = async(req,res) => {
    try {
        const data = req.body
        const new_i = await i_Service.create_I(data)

        res.status(200).json({
            message:"Created",
            success:true,
            data:new_i
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const list_I = async(req,res) => {
    try {
        const new_i = await i_Service.list_I()

        res.status(200).json({
            message:"Founded",
            success:true,
            data:new_i
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const delete_I = async(req,res) => {
    try {
        const id = req.params.id
        const new_i = await i_Service.delete_I(id)

        res.status(200).json({
            message:"Deleted",
            success:true,
            data:new_i
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const update_I = async(req,res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await i_Service.update_I(id,data)

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
    create_I,
    list_I,
    delete_I,
    update_I
} 