const express = require("express")
const { food_Controller } = require("../../Controller")

const router = express.Router()

router.post(
    "/food-create",
    food_Controller.create_Food
)
router.get(
    "/food-list",
    food_Controller.list_Food
)
router.delete(
    "/food-delete/:id",
    food_Controller.delete_Food
)
router.put(
    "/food-update/:id",
    food_Controller.update_Food
)

module.exports = router