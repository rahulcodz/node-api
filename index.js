const express = require("express")
const app = express()
const pool = require("./database")

require("dotenv").config()

app.use(express.json())

app.use("/api", async (req, res) => {
  try {
    const data = await pool.query(`SELECT * FROM employees`)
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error })
  }
})

app.listen(process.env.PORT, () =>
  console.log("Server is running on port: " + process.env.PORT)
)
