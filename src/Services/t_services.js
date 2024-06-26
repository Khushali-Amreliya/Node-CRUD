const { T } = require("../Model")

const create_T = (data) => {
    return T.create(data)
}   

const list_T = () => {
    return T.find()
} 

const delete_T = (id) => {
    return T.findByIdAndDelete(id)
}

const update_T = (id,data) => {
    return T.findByIdAndUpdate(id,data)
}
module.exports = {
    create_T,
    list_T,
    delete_T,
    update_T
}