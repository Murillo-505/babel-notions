const { Router } = require("express");
const wallsController = require("../controllers/wallsController");

const router = Router();

router.get("/", wallsController.listWalls);
router.get("/:id", wallsController.getWall);
router.post("/", wallsController.createWall);
router.put("/:id", wallsController.updateWall);
router.delete("/:id", wallsController.deleteWall);

module.exports = router;
