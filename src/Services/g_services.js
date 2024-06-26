const { G } = require("../Model")

const create_G = (data) => {
    return G.create(data)
}   

const list_G = () => {
    return G.find()
} 

const delete_G = (id) => {
    return G.findByIdAndDelete(id)
}

const update_G = (id,data) => {
    return G.findByIdAndUpdate(id,data)
}
module.exports = {
    create_G,
    list_G,
    delete_G,
    update_G
}