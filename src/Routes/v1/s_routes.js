const express = require("express")
const { s_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/s-create",
    s_Controller.create_S
)
router.get(
    "/s-list",
    s_Controller.list_S
)
router.delete(
    "/s-delete/:id",
    s_Controller.delete_S
)                                                                                   
router.put(
    "/s-update/:id",
    s_Controller.update_S
)

module.exports = router