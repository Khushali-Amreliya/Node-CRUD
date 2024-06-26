const { n_Service } = require("../Services")


const create_N = async (req, res) => {
    try {
        const data = req.body
        const new_n = await n_Service.create_N(data)

        res.status(200).json({
            message: "Created",
            success: true,
            data: new_n
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const list_N = async (req, res) => {
    try {
        const new_n = await n_Service.list_N()

        res.status(200).json({
            message: "Founded",
            success: true,
            data: new_n
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const delete_N = async (req, res) => {
    try {
        const id = req.params.id
        const new_n = await n_Service.delete_N(id)

        res.status(200).json({
            message: "Deleted",
            success: true,
            data: new_n
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

const update_N = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const Result = await n_Service.update_N(id, data)

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
    create_N,
    list_N,
    delete_N,
    update_N
} 