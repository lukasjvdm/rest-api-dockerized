const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.post("/", (req, res) => controller.addUser(req, res));
router.get("/",(req, res) => controller.getUsers(req, res));
router.get("/:username", (req, res) => controller.getUser(req, res));
router.delete("/:username", (req, res) => controller.removeUser(req, res));
router.put("/:username", (req, res) => controller.updateUserNumber(req, res));


module.exports = router;