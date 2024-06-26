const { B } = require("../Model")

const create_B = (data) => {
    return B.create(data)
}   

const list_B = () => {
    return B.find()
} 

const delete_B = (id) => {
    return B.findByIdAndDelete(id)
}

const update_B = (id,data) => {
    return B.findByIdAndUpdate(id,data)
}
module.exports = {
    create_B,
    list_B,
    delete_B,
    update_B
}