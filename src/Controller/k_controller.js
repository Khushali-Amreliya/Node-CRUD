const { k_Service } = require("../Services")

const create_K = async (req, res) => {
    try {
        const data = req.body
        const new_k = await k_Service.create_K(data)

        res.status(200).json({
            message: "Created",
            success: true,
            data: new_k
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const list_K = async (req, res) => {
    try {
        const new_k = await k_Service.list_K()

        res.status(200).json({
            message: "Founded",
            success: true,
            data: new_k
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const delete_K = async (req, res) => {
    try {
        const id = req.params.id
        const new_k = await k_Service.delete_K(id)

        res.status(200).json({
            message: "Deleted",
            success: true,
            data: new_k
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const update_K = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await k_Service.update_K(id, data)

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
    create_K,
    list_K,
    delete_K,
    update_K
} 