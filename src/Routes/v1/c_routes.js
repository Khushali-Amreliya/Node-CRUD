const express = require("express")
const { c_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/create-c",
    c_Controller.create_C
)
router.get(
    "/c-list",
    c_Controller.list_C
)
router.delete(
    "/c-delete/:id",
    c_Controller.delete_C
)
-
router.put(
    "/c-update/:id",
    c_Controller.update_C
)

module.exports = router