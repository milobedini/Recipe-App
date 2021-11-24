import express from "express"
import mongoose from "mongoose"
import { port, dbURI } from "./config/environment.js"
import router from "./config/router.js"
import "dotenv/config"
import path, { dirname } from "path"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

const startServers = async () => {
  try {
    await mongoose.connect(dbURI)
    console.log("Database has launched")

    // JSON parser
    app.use(express.json())

    // logger middleware
    app.use((req, _res, next) => {
      console.log(`Request received for ${req.method} at ${req.url}`)
      next()
    })
    // router
    app.use("/api", router)

    app.use(express.static(path.join(__dirname, "client", "build")))

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"))
    })

    // catch all
    app.use((_req, res) => {
      res.status(404).json({ message: "Route Not Found" })
    })

    // start the db once the server has been connected successfully
    app.listen(port, () => console.log(`Server up and running port ${port}`))
  } catch (err) {
    console.log("There was an error! :(")
    console.log(err)
  }
}
startServers()
