const { A } = require("../Model")

const create_A = (data) => {
    return A.create(data)
}   

const list_A = () => {
    return A.find()
} 

const delete_A = (id) => {
    return A.findByIdAndDelete(id)
}

const update_A = (id,data) => {
    return A.findByIdAndUpdate(id,data)
}
module.exports = {
    create_A,
    list_A,
    delete_A,
    update_A
}