const { W } = require("../Model")

const create_W = (data) => {
    return W.create(data)
}   

const list_W = () => {
    return W.find()
} 

const delete_W = (id) => {
    return W.findByIdAndDelete(id)
}

const update_W = (id,data) => {
    return W.findByIdAndUpdate(id,data)
}
module.exports = {
    create_W,
    list_W,
    delete_W,
    update_W
}