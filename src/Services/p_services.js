const { P } = require("../Model")

const create_P = (data) => {
    return P.create(data)
}   

const list_P = () => {
    return P.find()
} 

const delete_P = (id) => {
    return P.findByIdAndDelete(id)
}

const update_P = (id,data) => {
    return P.findByIdAndUpdate(id,data)
}
module.exports = {
    create_P,
    list_P,
    delete_P,
    update_P
}