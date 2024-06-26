const express = require("express")
const { k_Controller } = require("../../Controller")
const router = express.Router()

router.post(
    "/k-create",    
    k_Controller.create_K
)
router.get(
    "/k-list",
    k_Controller.list_K
)
router.delete(
    "/k-delete/:id",
    k_Controller.delete_K
)
router.put(
    "/k-update/:id",
    k_Controller.update_K
)

module.exports = router