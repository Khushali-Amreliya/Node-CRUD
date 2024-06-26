const express = require("express")
const { v_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/v-create",
    v_Controller.create_V
)
router.get(
    "/v-list",
    v_Controller.list_V
)
router.delete(
    "/v-delete/:id",
    v_Controller.delete_V
)                                                                                   
router.put(
    "/v-update/:id",
    v_Controller.update_V
)

module.exports = router