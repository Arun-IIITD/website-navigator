const express = require("express");
const multer = require("multer");
const { parseFile } = require("../utils/parser");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const urls = await parseFile(req.file.path);
    res.json({ urls });
  } catch (err) {
    res.status(500).json({ error: "File parsing failed" });
  }
});

module.exports = router;