const { R } = require("../Model")

const create_R = (data) => {
    return R.create(data)
}   

const list_R = () => {
    return R.find()
} 

const delete_R = (id) => {
    return R.findByIdAndDelete(id)
}

const update_R = (id,data) => {
    return R.findByIdAndUpdate(id,data)
}
module.exports = {
    create_R,
    list_R,
    delete_R,
    update_R
}