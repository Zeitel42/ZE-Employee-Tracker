const express = require("express");
const mysql = "mysql2";
const router = express.Router();

// Get all candidates and their party affiliation
router.get("/departments", (req, res) => {
  const sql = `SELECT * FROM departments`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});
module.exports = router;
