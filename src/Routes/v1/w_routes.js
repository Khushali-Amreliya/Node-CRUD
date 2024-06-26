const express = require("express")
const { w_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/w-create",
    w_Controller.create_W
)
router.get(
    "/w-list",
    w_Controller.list_W
)
router.delete(
    "/w-delete/:id",
    w_Controller.delete_W
)                                                                                   
router.put(
    "/w-update/:id",
    w_Controller.update_W
)

module.exports = router