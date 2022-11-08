const express = require("express")
require("./db/mongoose")
const User = require("./models/user")
const Task = require("./models/task")

const app = express()
const port = process.env.PORT || 8000
app.use(express.json())

app.post("/userss", (req, res) => {
  const user = new User(req.body)
  user
    .save()
    .then(() => {
      res.status(201).send(user)
    })
    .catch((e) => res.status(400).send(e))
})

app.post("/taskss", (req, res) => {
  const task = new Task(req.body)
  task
    .save()
    .then(() => {
      res.status(201).send(task)
    })
    .catch((e) => res.status(400).send(e))
})

app.get("/userss", (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch((e) => res.status(500).send(e))
})
app.get("/taskss", (req, res) => {
  Task.find({})
    .then((taskss) => res.send(taskss))
    .catch((e) => res.status(500).send(e))
})

app.get("/userss/:id", (req, res) => {
  const _id = req.params.id
  User.findById(_id)
    .then((user) => {
      if (!user) return res.status(404).send()
      res.send(user)
    })
    .catch((e) => res.status(500).send(e))
})

app.get("/taskss/:id", (req, res) => {
  const _id = req.params.id
  Task.findById(_id)
    .then((task) => {
      if (!task) return res.status(404).send()
      res.send(task)
    })
    .catch((e) => res.status(500).send(e))
})

app.put("/userss/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!user) return res.status(404).send()
    res.send(user)
  } catch (e) {
    res.status(500).send(e)
  }
})

app.put("/taskss/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!task) return res.status(404).send()
    res.send(task)
  } catch (e) {
    res.status(500).send(e)
  }
})

app.delete("/userss/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).send()
    res.send(user)
  } catch (e) {
    res.status(500).send(e)
  }
})

app.delete("/taskss/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).send()
    res.send(task)
  } catch (e) {
    res.status(500).send(e)
  }
})

app.listen(port, () => console.log(`Server started on port ${port}`))
