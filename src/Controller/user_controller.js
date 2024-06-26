const { user_Service } = require("../Services")

const create_User = async (req, res) => {
    try {
        const data = req.body
        const new_user = await user_Service.create_User(data)

        if (!new_user) {
            throw new Error("Not created")
        }

        res.status(200).json({
            success: true,
            message: "Created!",
            data: new_user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const get_User = async (req, res) => {
    try {
        const new_user = await user_Service.get_User()

        if (!new_user) {
            throw new Error("Not Founded")
        }

        res.status(200).json({
            success: true,
            message: "Founded!",
            data: new_user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const delete_user = async (req, res) => {
    try {

        const id = req.params.id
        const result = await user_Service.delete_User(id)

        if (!result) {
            throw new Error("Not DELETED")
        }

        res.status(200).json({
            success: true,
            message: "Deleted!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const update_user = async (req, res) => {
    try {

        const id = req.params.id
        const data = req.body
        const result = await user_Service.update_User(id,data)

        if (!result) {
            throw new Error("Not Updated")
        }

        res.status(200).json({
            success: true,
            message: "Updated!",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_User,
    get_User,
    delete_user,
    update_user
}