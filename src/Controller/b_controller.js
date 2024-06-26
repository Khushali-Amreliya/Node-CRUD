const { b_Service } = require("../Services")

const create_B = async(req,res) => {
    try {
        const data = req.body
        const new_b = await b_Service.create_B(data)

        res.status(200).json({
            message:"Created",
            success:true,
            data:new_b
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const list_B = async(req,res) => {
    try {
        const new_b = await b_Service.list_B()

        res.status(200).json({
            message:"Founded",
            success:true,
            data:new_b
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const delete_B = async(req,res) => {
    try {
        const id = req.params.id
        const new_b = await b_Service.delete_B(id)

        res.status(200).json({
            message:"Deleted",
            success:true,
            data:new_b
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const update_B = async(req,res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await b_Service.update_B(id,data)

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
    create_B,
    list_B,
    delete_B,
    update_B
} 