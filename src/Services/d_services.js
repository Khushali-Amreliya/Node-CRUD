const { D } = require("../Model")

const create_D = (data) => {
    return D.create(data)
}   

const list_D = () => {
    return D.find()
} 

const delete_D = (id) => {
    return D.findByIdAndDelete(id)
}

const update_D = (id,data) => {
    return D.findByIdAndUpdate(id,data)
}
module.exports = {
    create_D,
    list_D,
    delete_D,
    update_D
}