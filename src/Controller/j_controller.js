const { j_Service } = require("../Services")

const create_J = async (req, res) => {
    try {
        const data = req.body
        const new_j = await j_Service.create_J(data)

        res.status(200).json({
            message: "Created",
            success: true,
            data: new_j
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const list_J = async (req, res) => {
    try {
        const new_j = await j_Service.list_J()

        res.status(200).json({
            message: "Founded",
            success: true,
            data: new_j
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const delete_J = async (req, res) => {
    try {
        const id = req.params.id
        const new_j = await j_Service.delete_J(id)

        res.status(200).json({
            message: "Deleted",
            success: true,
            data: new_j
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const update_J = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await j_Service.update_J(id, data)

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
    create_J,
    list_J,
    delete_J,
    update_J
} 