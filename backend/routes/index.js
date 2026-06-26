const { Router } = require("express");
const { getHealth } = require("../controllers/healthController");
const librariesRoutes = require("./librariesRoutes");
const volumesRoutes = require("./volumesRoutes");
const wallsRoutes = require("./wallsRoutes");

const router = Router();

router.get("/", getHealth);
router.use("/libraries", librariesRoutes);
router.use("/volumes", volumesRoutes);
router.use("/walls", wallsRoutes);

module.exports = router;
