const express = require("express")
const { l_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/l-create",
    l_Controller.create_L    
)
router.get(
    "/l-list",
    l_Controller.list_L
)
router.delete(
    "/l-delete/:id",
    l_Controller.delete_L
)                                                                                   
router.put(
    "/l-update/:id", 
    l_Controller.update_L
)

module.exports = router