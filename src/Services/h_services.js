const { H } = require("../Model")

const create_H = (data) => {
    return H.create(data)
}   

const list_H = () => {
    return H.find()
} 

const delete_H = (id) => {
    return H.findByIdAndDelete(id)
}

const update_H = (id,data) => {
    return H.findByIdAndUpdate(id,data)
}
module.exports = {
    create_H,
    list_H,
    delete_H,
    update_H
}