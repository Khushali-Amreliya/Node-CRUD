const { t_Service } = require("../Services")

const create_T = async (req, res) => {
    try {
        const data = req.body
        const new_t = await t_Service.create_T(data)

        res.status(200).json({
            message: "Created",
            success: true,
            data: new_t
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const list_T = async (req, res) => {
    try {
        const new_t = await t_Service.list_T()

        res.status(200).json({
            message: "Founded",
            success: true,
            data: new_t
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const delete_T = async (req, res) => {
    try {
        const id = req.params.id
        const new_t = await t_Service.delete_T(id)

        res.status(200).json({
            message: "Deleted",
            success: true,
            data: new_t
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const update_T = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await t_Service.update_T(id, data)

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
    create_T,
    list_T,
    delete_T,
    update_T
} 