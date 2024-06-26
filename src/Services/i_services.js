const { I } = require("../Model")

const create_I = (data) => {
    return I.create(data)
}   

const list_I = () => {
    return I.find()
} 

const delete_I = (id) => {
    return I.findByIdAndDelete(id)
}

const update_I = (id,data) => {
    return I.findByIdAndUpdate(id,data)
}
module.exports = {
    create_I,
    list_I,
    delete_I,
    update_I
}