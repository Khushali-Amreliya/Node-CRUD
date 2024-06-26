const { h_Service } = require("../Services")

const create_H = async(req,res) => {
    try {
        const data = req.body
        const new_h = await h_Service.create_H(data)

        res.status(200).json({
            message:"Created",
            success:true,
            data:new_h
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const list_H = async(req,res) => {
    try {
        const new_h = await h_Service.list_H()

        res.status(200).json({
            message:"Founded",
            success:true,
            data:new_h
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const delete_H = async(req,res) => {
    try {
        const id = req.params.id
        const new_h = await h_Service.delete_H(id)

        res.status(200).json({
            message:"Deleted",
            success:true,
            data:new_h
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const update_H = async(req,res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await h_Service.update_H(id,data)

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
    create_H,
    list_H,
    delete_H,
    update_H
} 