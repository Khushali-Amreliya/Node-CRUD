const { E } = require("../Model")

const create_E = (data) => {
    return E.create(data)
}   

const list_E = () => {
    return E.find()
} 

const delete_E = (id) => {
    return E.findByIdAndDelete(id)
}

const update_E = (id,data) => {
    return E.findByIdAndUpdate(id,data)
}
module.exports = {
    create_E,
    list_E,
    delete_E,
    update_E
}