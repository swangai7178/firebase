/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */
const express = require('express');
const cors = require('cors');
const User = require('./config');
const { doc } = require('./config');
const app = express();
app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) =>
{
    const data = req.body;
    console.log("data of users", data);
    await User.add(data)
    res.send({ msg: "user added " });
})
app.get("/", async (req, res) => {
    const snapshot = await User.get()
    const list = snapshot.docs.map((doc) => ({id:doc.id, ...doc.data() }))
    res.send(list)
})
app.post("/delete", async (req, res) => {
  const id = req.body.id;
  await User.doc(id).delete();
  res.send({ msg: "Deleted" });
});
app.post("/update", async (req, res) => {
  const id = req.body.id;
  delete req.body.id;
  const data = req.body;
  await User.doc(id).update(data);
    res.send({ msg: "Updated" }); 
});

app.listen(4000, () => console.log("up and running *4000"));