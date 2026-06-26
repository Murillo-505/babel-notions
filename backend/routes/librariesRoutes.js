const { Router } = require("express");
const librariesController = require("../controllers/librariesController");

const router = Router();

router.get("/", librariesController.listLibraries);
router.get("/:id", librariesController.getLibrary);
router.post("/", librariesController.createLibrary);
router.put("/:id", librariesController.updateLibrary);
router.delete("/:id", librariesController.deleteLibrary);

module.exports = router;
