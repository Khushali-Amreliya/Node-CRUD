const { Q } = require("../Model")

const create_Q = (data) => {
    return Q.create(data)
}   

const list_Q = () => {
    return Q.find()
} 

const delete_Q = (id) => {
    return Q.findByIdAndDelete(id)
}

const update_Q = (id,data) => {
    return Q.findByIdAndUpdate(id,data)
}
module.exports = {
    create_Q,
    list_Q,
    delete_Q,
    update_Q
}