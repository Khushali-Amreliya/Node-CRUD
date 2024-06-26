const { O } = require("../Model")

const create_O = (data) => {
    return O.create(data)
}   

const list_O = () => {
    return O.find()
} 

const delete_O = (id) => {
    return O.findByIdAndDelete(id)
}

const update_O = (id,data) => {
    return O.findByIdAndUpdate(id,data)
}
module.exports = {
    create_O,
    list_O,
    delete_O,
    update_O
}