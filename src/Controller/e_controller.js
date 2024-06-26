const { e_Service } = require("../Services")

const create_E = async(req,res) => {
    try {
        const data = req.body
        const new_e = await e_Service.create_E(data)

        res.status(200).json({
            message:"Created",
            success:true,
            data:new_e
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const list_E = async(req,res) => {
    try {
        const new_e = await e_Service.list_E()

        res.status(200).json({
            message:"Founded",
            success:true,
            data:new_e
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const delete_E = async(req,res) => {
    try {
        const id = req.params.id
        const new_e = await e_Service.delete_E(id)

        res.status(200).json({
            message:"Deleted",
            success:true,
            data:new_e
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const update_E = async(req,res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await e_Service.update_E(id,data)

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
    create_E,
    list_E,
    delete_E,
    update_E
} 