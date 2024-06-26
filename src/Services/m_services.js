const { M } = require("../Model")

const create_M = (data) => {
    return M.create(data)
}   

const list_M = () => {
    return M.find()
} 

const delete_M = (id) => {
    return M.findByIdAndDelete(id)
}

const update_M = (id,data) => {
    return M.findByIdAndUpdate(id,data)
}
module.exports = {
    create_M,
    list_M,
    delete_M,
    update_M
}