const { Router } = require("express");
const shelvesController = require("../controllers/shelvesController");

const router = Router();

router.get("/", shelvesController.listShelves);
router.get("/:id", shelvesController.getShelf);
router.post("/", shelvesController.createShelf);
router.put("/:id", shelvesController.updateShelf);
router.delete("/:id", shelvesController.deleteShelf);

module.exports = router;
