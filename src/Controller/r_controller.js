const { r_Service } = require("../Services")

const create_R = async (req, res) => {
    try {
        const data = req.body
        const new_r = await r_Service.create_R(data)

        res.status(200).json({
            message: "Created",
            success: true,
            data: new_r
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const list_R = async (req, res) => {
    try {
        const new_r = await r_Service.list_R()

        res.status(200).json({
            message: "Founded",
            success: true,
            data: new_r
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const delete_R = async (req, res) => {
    try {
        const id = req.params.id
        const new_r = await r_Service.delete_R(id)

        res.status(200).json({
            message: "Deleted",
            success: true,
            data: new_r
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const update_R = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await r_Service.update_R(id, data)

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
    create_R,
    list_R,
    delete_R,
    update_R
} 