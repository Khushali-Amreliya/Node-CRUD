const { K } = require("../Model")


const create_K = (data) => {
    return K.create(data)
}   

const list_K = () => {
    return K.find()
} 

const delete_K = (id) => {
    return K.findByIdAndDelete(id)
}

const update_K = (id,data) => {
    return K.findByIdAndUpdate(id,data)
}
module.exports = {
    create_K,
    list_K,
    delete_K,
    update_K
}