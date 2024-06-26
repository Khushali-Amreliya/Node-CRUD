const { u_Service } = require("../Services")

const create_U = async (req, res) => {
    try {
        const data = req.body
        const new_u = await u_Service.create_U(data)

        res.status(200).json({
            message: "Created",
            success: true,
            data: new_u
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const list_U = async (req, res) => {
    try {
        const new_u = await u_Service.list_U()

        res.status(200).json({
            message: "Founded",
            success: true,
            data: new_u
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const delete_U = async (req, res) => {
    try {
        const id = req.params.id
        const new_u = await u_Service.delete_U(id)

        res.status(200).json({
            message: "Deleted",
            success: true,
            data: new_u
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const update_U = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await u_Service.update_U(id, data)

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
    create_U,
    list_U,
    delete_U,
    update_U
} 