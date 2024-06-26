const { v_Service } = require("../Services")

const create_V = async (req, res) => {
    try {
        const data = req.body
        const new_v = await v_Service.create_V(data)

        res.status(200).json({
            message: "Created",
            success: true,
            data: new_v
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const list_V = async (req, res) => {
    try {
        const new_v = await v_Service.list_V()

        res.status(200).json({
            message: "Founded",
            success: true,
            data: new_v
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const delete_V = async (req, res) => {
    try {
        const id = req.params.id
        const new_v = await v_Service.delete_V(id)

        res.status(200).json({
            message: "Deleted",
            success: true,
            data: new_v
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const update_V = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await v_Service.update_V(id, data)

        if (!Result) {
            throw new Error("not updated")
        }

        res.status(200).json({
            message: "Updated",
            success: true,
            data: data
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

module.exports = {
    create_V,
    list_V,
    delete_V,
    update_V
} 