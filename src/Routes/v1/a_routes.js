const express = require("express")
const { a_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/create-a",
    a_Controller.create_A
)
router.get(
    "/a-list",
    a_Controller.list_A
)
router.delete(
    "/a-delete/:id",
    a_Controller.delete_A
)

router.put(
    "/a-update/:id",
    a_Controller.update_A
)

module.exports = router