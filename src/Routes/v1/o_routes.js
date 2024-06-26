const express = require("express")
const { o_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/o-create",
    o_Controller.create_O
)
router.get(
    "/o-list",
    o_Controller.list_O
)
router.delete(
    "/o-delete/:id",
    o_Controller.delete_O
)                                                                                   
router.put(
    "/o-update/:id",
    o_Controller.update_O
)

module.exports = router