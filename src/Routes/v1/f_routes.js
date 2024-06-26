const express = require("express")
const { f_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/f-create",
    f_Controller.create_F
)
router.get(
    "/f-list",
    f_Controller.list_F
)
router.delete(
    "/f-delete/:id",
    f_Controller.delete_F
)
router.put(
    "/f-update/:id",
    f_Controller.update_F
)

module.exports = router