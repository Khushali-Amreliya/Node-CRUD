const { o_Service } = require("../Services")

const create_O = async (req, res) => {
    try {
        const data = req.body
        const new_o = await o_Service.create_O(data)

        res.status(200).json({
            message: "Created",
            success: true,
            data: new_o
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const list_O = async (req, res) => {
    try {
        const new_o = await o_Service.list_O()

        res.status(200).json({
            message: "Founded",
            success: true,
            data: new_o
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const delete_O = async (req, res) => {
    try {
        const id = req.params.id
        const new_o = await o_Service.delete_O(id)

        res.status(200).json({
            message: "Deleted",
            success: true,
            data: new_o
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const update_O = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await o_Service.update_O(id, data)

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
    create_O,
    list_O,
    delete_O,
    update_O
} 