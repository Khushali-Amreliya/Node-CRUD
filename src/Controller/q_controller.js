const { q_Service } = require("../Services")

const create_Q = async (req, res) => {
    try {
        const data = req.body
        const new_q = await q_Service.create_Q(data)

        res.status(200).json({
            message: "Created",
            success: true,
            data: new_q
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const list_Q = async (req, res) => {
    try {
        const new_q = await q_Service.list_Q()

        res.status(200).json({
            message: "Founded",
            success: true,
            data: new_q
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const delete_Q = async (req, res) => {
    try {
        const id = req.params.id
        const new_q = await q_Service.delete_Q(id)

        res.status(200).json({
            message: "Deleted",
            success: true,
            data: new_q
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const update_Q = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await q_Service.update_Q(id, data)

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
    create_Q,
    list_Q,
    delete_Q,
    update_Q
} 