const { User } = require("../Model")

const create_User = (data) => {
    return User.create(data)
}

const get_User = () => {
    return User.find()
}

const delete_User = (id) => {
    return User.findByIdAndDelete(id)
}

const update_User = (id,data) => {
    return User.findByIdAndUpdate(id,data)
}

module.exports = {
    create_User,
    get_User,
    delete_User,
    update_User
}