const express = require("express")
const { user_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/create_user",
    // cb => controller
    user_Controller.create_User
)
router.get(
    "/create-list",
    user_Controller.get_User
)
router.delete(
    "/user_delete/:id",
    user_Controller.delete_user
)

router.put(
    "/user_update/:id",
    user_Controller.update_user
)

module.exports = router