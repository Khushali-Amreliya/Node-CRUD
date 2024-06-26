const { m_Service } = require("../Services")

const create_M = async (req, res) => {
    try {
        const data = req.body
        const new_m = await m_Service.create_M(data)

        res.status(200).json({
            message: "Created",
            success: true,
            data: new_m
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const list_M = async (req, res) => {
    try {
        const new_m = await m_Service.list_M()

        res.status(200).json({
            message: "Founded",
            success: true,
            data: new_m
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const delete_M = async (req, res) => {
    try {
        const id = req.params.id
        const new_m = await m_Service.delete_M(id)

        res.status(200).json({
            message: "Deleted",
            success: true,
            data: new_m
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const update_M = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await m_Service.update_M(id, data)

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
    create_M,
    list_M,
    delete_M,
    update_M
} 