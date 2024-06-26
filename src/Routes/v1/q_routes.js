const express = require("express")
const { q_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/q-create",
    q_Controller.create_Q
)
router.get(
    "/q-list",
    q_Controller.list_Q
)
router.delete(
    "/q-delete/:id",
    q_Controller.delete_Q
)                                                                                   
router.put(
    "/q-update/:id",
    q_Controller.update_Q
)

module.exports = router