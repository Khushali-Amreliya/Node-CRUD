const express = require("express")
const { d_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/d-create",
    d_Controller.create_D
)
router.get(
    "/d-list",
    d_Controller.list_D
)
router.delete(
    "/d-delete/:id",
    d_Controller.delete_D
)

router.put(
    "/d-update/:id",
    d_Controller.update_D
)

module.exports = router