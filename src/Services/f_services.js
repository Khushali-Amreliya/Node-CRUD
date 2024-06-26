const { F } = require("../Model")

const create_F = (data) => {
    return F.create(data)
}   

const list_F = () => {
    return F.find()
} 

const delete_F = (id) => {
    return F.findByIdAndDelete(id)
}

const update_F = (id,data) => {
    return F.findByIdAndUpdate(id,data)
}
module.exports = {
    create_F,
    list_F,
    delete_F,
    update_F
}