const express = require("express")
const { i_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/i-create",
    i_Controller.create_I
)
router.get(
    "/i-list",
    i_Controller.list_I
)
router.delete(
    "/i-delete/:id",
    i_Controller.delete_I
)
router.put(
    "/i-update/:id",
    i_Controller.update_I
)

module.exports = router