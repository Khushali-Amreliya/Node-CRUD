const { S } = require("../Model")

const create_S = (data) => {
    return S.create(data)
}   

const list_S = () => {
    return S.find()
} 

const delete_S = (id) => {
    return S.findByIdAndDelete(id)
}

const update_S = (id,data) => {
    return S.findByIdAndUpdate(id,data)
}
module.exports = {
    create_S,
    list_S,
    delete_S,
    update_S
}