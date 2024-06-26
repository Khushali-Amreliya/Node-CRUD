const express = require("express")
const { h_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/h-create",
    h_Controller.create_H
)
router.get(
    "/h-list",
    h_Controller.list_H
)
router.delete(
    "/h-delete/:id",
    h_Controller.delete_H
)
router.put(
    "/h-update/:id",
    h_Controller.update_H
)

module.exports = router