const { V } = require("../Model")

const create_V = (data) => {
    return V.create(data)
}   

const list_V = () => {
    return V.find()
} 

const delete_V = (id) => {
    return V.findByIdAndDelete(id)
}

const update_V = (id,data) => {
    return V.findByIdAndUpdate(id,data)
}
module.exports = {
    create_V,
    list_V,
    delete_V,
    update_V
}