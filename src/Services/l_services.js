const { L } = require("../Model")

const create_L = (data) => {
    return L.create(data)
}   

const list_L = () => {
    return L.find()
} 

const delete_L = (id) => {
    return L.findByIdAndDelete(id)
}

const update_L = (id,data) => {
    return L.findByIdAndUpdate(id,data)
}
module.exports = {
    create_L,
    list_L,
    delete_L,
    update_L
}