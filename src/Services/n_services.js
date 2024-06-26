const { N } = require("../Model")

const create_N = (data) => {
    return N.create(data)
}   

const list_N = () => {
    return N.find()
} 

const delete_N = (id) => {
    return N.findByIdAndDelete(id)
}

const update_N = (id,data) => {
    return N.findByIdAndUpdate(id,data)
}
module.exports = {
    create_N,
    list_N,
    delete_N,
    update_N
}