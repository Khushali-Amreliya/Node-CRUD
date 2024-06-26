const { l_Service } = require("../Services")

const create_L = async (req, res) => {
    try {
        const data = req.body
        const new_l = await l_Service.create_L(data)

        res.status(200).json({
            message: "Created",
            success: true,
            data: new_l
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const list_L = async (req, res) => {
    try {
        const new_l = await l_Service.list_L()

        res.status(200).json({
            message: "Founded",
            success: true,
            data: new_l
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const delete_L = async (req, res) => {
    try {
        const id = req.params.id
        const new_l = await l_Service.delete_L(id)

        res.status(200).json({
            message: "Deleted",
            success: true,
            data: new_l
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const update_L = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await l_Service.update_L(id, data)

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
    create_L,
    list_L,
    delete_L,
    update_L
} 