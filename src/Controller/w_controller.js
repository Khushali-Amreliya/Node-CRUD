const { w_Service } = require("../Services")

const create_W = async (req, res) => {
    try {
        const data = req.body
        const new_w = await w_Service.create_W(data)

        res.status(200).json({
            message: "Created",
            success: true,
            data: new_w
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const list_W = async (req, res) => {
    try {
        const new_w = await w_Service.list_W()

        res.status(200).json({
            message: "Founded",
            success: true,
            data: new_w
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const delete_W = async (req, res) => {
    try {
        const id = req.params.id
        const new_w = await w_Service.delete_W(id)

        res.status(200).json({
            message: "Deleted",
            success: true,
            data: new_w
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const update_W = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await w_Service.update_W(id, data)

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
    create_W,
    list_W,
    delete_W,
    update_W
} 