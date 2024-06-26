const { c_Service } = require("../Services")

const create_C = async(req,res) => {
    try {
        const data = req.body
        const new_c = await c_Service.create_C(data)

        res.status(200).json({
            message:"Created",
            success:true,
            data:new_c
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const list_C = async(req,res) => {
    try {
        const new_c = await c_Service.list_C()

        res.status(200).json({
            message:"Founded",
            success:true,
            data:new_c
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const delete_C = async(req,res) => {
    try {
        const id = req.params.id
        const new_c = await c_Service.delete_C(id)

        res.status(200).json({
            message:"Deleted",
            success:true,
            data:new_c
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const update_C = async(req,res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await c_Service.update_C(id,data)

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
    create_C,
    list_C,
    delete_C,
    update_C
} 