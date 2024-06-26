const { food_Service } = require("../Services")

const create_Food = async(req,res) => {
    try {
        const data = req.body
        const new_food = await food_Service.create_Food(data)

        res.status(200).json({
            message:"Created",
            success:true,
            data:new_food
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const list_Food = async(req,res) => {
    try {
        const new_food = await food_Service.list_Food()

        res.status(200).json({
            message:"Founded",
            success:true,
            data:new_food
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const delete_Food = async(req,res) => {
    try {
        const id = req.params.id
        const new_food = await food_Service.delete_Food(id)

        res.status(200).json({
            message:"Deleted",
            success:true,
            data:new_food
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

const update_Food = async(req,res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await food_Service.update_Food(id,data)

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
    create_Food,
    list_Food,
    delete_Food,
    update_Food
} 