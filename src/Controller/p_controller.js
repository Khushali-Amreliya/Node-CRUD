const { p_Service } = require("../Services")

const create_p = async (req, res) => {
    try {
        const data = req.body
        const new_p = await p_Service.create_P(data)

        res.status(200).json({
            message: "Created",
            success: true,
            data: new_p
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const list_p = async (req, res) => {
    try {
        const new_p = await p_Service.list_P()

        res.status(200).json({
            message: "Founded",
            success: true,
            data: new_p
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const delete_p = async (req, res) => {
    try {
        const id = req.params.id
        const new_p = await p_Service.delete_P(id)

        res.status(200).json({
            message: "Deleted",
            success: true,
            data: new_p
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const update_p = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await p_Service.update_P(id, data)

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
    create_p,
    list_p,
    delete_p,
    update_p
} 