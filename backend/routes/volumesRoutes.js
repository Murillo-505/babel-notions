const { Router } = require("express");
const volumesController = require("../controllers/volumesController");

const router = Router();

router.get("/:id", volumesController.getVolume);
router.post("/", volumesController.createVolume);
router.put("/:id", volumesController.updateVolume);
router.delete("/:id", volumesController.deleteVolume);

module.exports = router;
