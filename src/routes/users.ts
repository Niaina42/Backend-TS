import express from "express"
import controller from "../controllers/users"

const router = express.Router()

router.get("/", controller.getAll)
router.get("/:id", controller.getOne)
router.post("/", controller.create)
router.put("/", controller.update)
router.delete("/:id", controller.delete)

export default router