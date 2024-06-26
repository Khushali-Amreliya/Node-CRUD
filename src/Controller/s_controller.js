const { s_Service } = require("../Services")

const create_S = async (req, res) => {
    try {
        const data = req.body
        const new_s = await s_Service.create_S(data)

        res.status(200).json({
            message: "Created",
            success: true,
            data: new_s
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const list_S = async (req, res) => {
    try {
        const new_s = await s_Service.list_S()

        res.status(200).json({
            message: "Founded",
            success: true,
            data: new_s
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const delete_S = async (req, res) => {
    try {
        const id = req.params.id
        const new_s = await s_Service.delete_S(id)

        res.status(200).json({
            message: "Deleted",
            success: true,
            data: new_s
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const update_S = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await s_Service.update_S(id, data)

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
    create_S,
    list_S,
    delete_S,
    update_S
} 