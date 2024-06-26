const express = require("express")
const { g_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/g-create",
    g_Controller.create_G
)
router.get(
    "/g-list",
    g_Controller.list_G
)
router.delete(
    "/g-delete/:id",
    g_Controller.delete_G
)
router.put(
    "/g-update/:id",
    g_Controller.update_G
)

module.exports = router