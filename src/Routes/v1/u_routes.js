const express = require("express")
const { u_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/u-create",
    u_Controller.create_U
)
router.get(
    "/u-list",
    u_Controller.list_U
)
router.delete(
    "/u-delete/:id",
    u_Controller.delete_U
)                                                                                   
router.put(
    "/u-update/:id",
    u_Controller.update_U
)

module.exports = router