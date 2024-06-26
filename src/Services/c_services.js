const { C } = require("../Model")

const create_C = (data) => {
    return C.create(data)
}   

const list_C = () => {
    return C.find()
} 

const delete_C = (id) => {
    return C.findByIdAndDelete(id)
}

const update_C = (id,data) => {
    return C.findByIdAndUpdate(id,data)
}
module.exports = {
    create_C,
    list_C,
    delete_C,
    update_C
}