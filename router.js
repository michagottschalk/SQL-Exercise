const { Router } = require("express");
const pool = require("./db");
const router = Router();

router.get("/user", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * from users");
    res.json({ data: rows });
  } catch (err) {
    res.sendStatus(500);
  }
});

router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id=$1;", [id]);
    res.json({ data: rows });
  } catch (e) {
    res.sendStatus(404);
  }
});

router.post("/users", async (req, res) => {
  const { firstname, lastname, age } = req.body;
  try {
    const { rows } = await pool.query(
      "INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *",
      [firstname, lastname, age]
    );
    res.json({ data: rows });
  } catch (e) {
    res.sendStatus(403);
  }
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { firstname } = req.body;
  try {
    const { rows } = await pool.query(
      "UPDATE users SET first_name=$1 WHERE id=$2 RETURNING *",
      [firstname, id]
    );
    res.json({ data: rows });
  } catch (e) {
    res.sendStatus(403);
  }
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query("DELETE FROM users WHERE id=$1", [id]);
    res.json({ message: `user with id${id} deleted` });
  } catch (err) {
    res.sendStatus(404);
  }
});

// Orders

router.get("/orders", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * from users");
    res.json({ data: rows });
  } catch (err) {
    res.sendStatus(500);
  }
});

router.get("/orders/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id=$1;", [id]);
    res.json({ data: rows });
  } catch (e) {
    res.sendStatus(404);
  }
});

router.post("/orders", async (req, res) => {
  const { pricefloat, timestamp, user_id } = req.body;
  try {
    const { rows } = await pool.query(
      "INSERT INTO orders (price float, data timestamp, user_id) VALUES ($1, $2, $3) RETURNING *",
      [pricefloat, timestamp, user_id]
    );
    res.json({ data: rows });
  } catch (e) {
    res.sendStatus(403);
  }
});

router.put("/orders/:id", async (req, res) => {
  const { id } = req.params;
  const { pricefloat } = req.body;
  try {
    const { rows } = await pool.query(
      "UPDATE orders SET price float=$1 WHERE id=$2 RETURNING *",
      [pricefloat, id]
    );
    res.json({ data: rows });
  } catch (e) {
    res.sendStatus(403);
  }
});

router.delete("/orders/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query("DELETE FROM users WHERE id=$1", [id]);
    res.json({ message: `user with id${id} deleted` });
  } catch (err) {
    res.sendStatus(404);
  }
});

module.exports = router;
