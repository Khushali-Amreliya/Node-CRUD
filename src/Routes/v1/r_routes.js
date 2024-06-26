const express = require("express")
const { r_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/r-create",
    r_Controller.create_R
)
router.get(
    "/r-list",
    r_Controller.list_R
)
router.delete(
    "/r-delete/:id",
    r_Controller.delete_R
)                                                                                   
router.put(
    "/r-update/:id",
    r_Controller.update_R
)

module.exports = router