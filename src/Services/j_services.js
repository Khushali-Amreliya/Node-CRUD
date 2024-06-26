const { J } = require("../Model")

const create_J = (data) => {
    return J.create(data)
}   

const list_J = () => {
    return J.find()
} 

const delete_J = (id) => {
    return J.findByIdAndDelete(id)
}

const update_J = (id,data) => {
    return J.findByIdAndUpdate(id,data)
}
module.exports = {
    create_J,
    list_J,
    delete_J,
    update_J
}