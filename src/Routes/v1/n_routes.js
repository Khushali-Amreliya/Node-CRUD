const express = require("express")
const { n_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/n-create",
    n_Controller.create_N
)
router.get(
    "/n-list",
    n_Controller.list_N
)
router.delete(
    "/n-delete/:id",
    n_Controller.delete_N
)                                                                                   
router.put(
    "/n-update/:id",
    n_Controller.update_N
)

module.exports = router