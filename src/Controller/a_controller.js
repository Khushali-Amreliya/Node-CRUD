const { a_Service } = require("../Services")

const create_A = async(req,res) => {
    try {
        const data = req.body
        const new_a = await a_Service.create_A(data)

        res.status(200).json({
            message:"Created",
            success:true,
            data:new_a
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const list_A = async(req,res) => {
    try {
        const new_a = await a_Service.list_A()

        res.status(200).json({
            message:"Founded",
            success:true,
            data:new_a
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const delete_A = async(req,res) => {
    try {
        const id = req.params.id
        const new_a = await a_Service.delete_A(id)

        res.status(200).json({
            message:"Deleted",
            success:true,
            data:new_a
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const update_A = async(req,res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await a_Service.update_A(id,data)

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
    create_A,
    list_A,
    delete_A,
    update_A
}