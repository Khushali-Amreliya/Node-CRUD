const express = require("express")
const { m_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/m-create",
    m_Controller.create_M   
)
router.get(
    "/m-list",
    m_Controller.list_M
)
router.delete(
    "/m-delete/:id",
    m_Controller.delete_M
)                                                                                   
router.put(
    "/m-update/:id",
    m_Controller.update_M
)

module.exports = router