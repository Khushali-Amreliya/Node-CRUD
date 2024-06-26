const express = require("express")
const { t_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/t-create",
    t_Controller.create_T
)
router.get(
    "/t-list",
    t_Controller.list_T
)
router.delete(
    "/t-delete/:id",
    t_Controller.delete_T
)                                                                                   
router.put(
    "/t-update/:id",
    t_Controller.update_T
)

module.exports = router