const { U } = require("../Model")

const create_U = (data) => {
    return U.create(data)
}   

const list_U = () => {
    return U.find()
} 

const delete_U = (id) => {
    return U.findByIdAndDelete(id)
}

const update_U = (id,data) => {
    return U.findByIdAndUpdate(id,data)
}
module.exports = {
    create_U,
    list_U,
    delete_U,
    update_U
}