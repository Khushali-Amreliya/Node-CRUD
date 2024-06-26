const express = require("express")
const { p_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/p-create",
    p_Controller.create_p
)
router.get(
    "/p-list",
    p_Controller.list_p
)
router.delete(
    "/p-delete/:id",
    p_Controller.delete_p
)                                                                                   
router.put(
    "/p-update/:id",
    p_Controller.update_p
)

module.exports = router