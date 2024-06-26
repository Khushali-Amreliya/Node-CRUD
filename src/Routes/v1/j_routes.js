const express = require("express")
const { j_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/j-create",
    j_Controller.create_J
)
router.get(
    "/j-list",
    j_Controller.list_J
)
router.delete(
    "/j-delete/:id",
    j_Controller.delete_J
)
router.put(
    "/j-update/:id",
    j_Controller.update_J
)

module.exports = router