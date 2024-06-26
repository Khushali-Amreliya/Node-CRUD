const express = require("express")
const { e_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/e-create",
    e_Controller.create_E
)
router.get(
    "/e-list",
    e_Controller.list_E
)
router.delete(
    "/e-delete/:id",
    e_Controller.delete_E
)
router.put(
    "/e-update/:id",
    e_Controller.update_E
)

module.exports = router