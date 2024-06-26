const { Food } = require("../Model")

const create_Food = (data) => {
    return Food.create(data)
}   

const list_Food = () => {
    return Food.find()
} 

const delete_Food = (id) => {
    return Food.findByIdAndDelete(id)
}

const update_Food = (id,data) => {
    return Food.findByIdAndUpdate(id,data)
}
module.exports = {
    create_Food,
    list_Food,
    delete_Food,
    update_Food
}