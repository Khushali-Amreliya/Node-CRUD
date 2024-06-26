const express = require("express")
const { b_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/create-b",
    b_Controller.create_B
)
router.get(
    "/b-list",
    b_Controller.list_B
)
router.delete(
    "/b-delete/:id",
    b_Controller.delete_B
)

router.put(
    "/b-update/:id",
    b_Controller.update_B
)

module.exports = router