const { MongoClient, ObjectId } = require("mongodb")

const connURL = "mongodb://127.0.0.1:27017"
const dbName = "task-manager"

MongoClient.connect(
  connURL,
  { useNewURLParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) return console.log("Unable to connect to Database")
    const db = client.db(dbName)
    // db.collection("users")
    //   .insertOne({
    //     name: "Prathamesh",
    //     age: 22,
    //   })
    //   .then((result) => console.log("Data Inserted", result.ops))
    //   .catch((error) => console.log("Error", error))

    // db.collection("users")
    //   .insertMany([
    //     {
    //       name: "ABC",
    //       age: 21,
    //     },
    //     {
    //       name: "BCD",
    //       age: 23,
    //     },
    //     {
    //       name: "XYZ",
    //       age: 24,
    //     },
    //   ])
    //   .then((result) => console.log("Data Inserted", result.ops))
    //   .catch((error) => console.log("Error", error))

    // db.collection("users")
    //   .findOne({ name: "Prathamesh" })
    //   .then((result) => console.log("Data Found...", result))
    //   .catch((error) => console.log("Error", error))

    // db.collection("users")
    //   .find({ name: "Prathamesh" })
    //   .toArray()
    //   .then((result) => console.log("Data Found...", result))
    //   .catch((error) => console.log("Error", error))

    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectId("6365029154dc5c19431d39a3") },
    //     { $set: { name: "PM" } }
    //   )
    //   .then((result) => console.log("Updated Data...", result.modifiedCount))
    //   .catch((error) => console.log("Error", error))

    // db.collection("users")
    //   .updateMany({ age: 22 }, { $set: { age: 5 } })
    //   .then((result) => console.log("Updated Data...", result.modifiedCount))
    //   .catch((error) => console.log("Error", error))

    db.collection("users")
      .deleteOne({ _id: new ObjectId("6365029154dc5c19431d39a3") })
      .then((result) => console.log("Deleted data --->", result.deletedCount))
      .catch((error) => console.log("Error", error))

    db.collection("users")
      .deleteMany({ age: 21 })
      .then((result) => console.log("Deleted data --->", result.deletedCount))
      .catch((error) => console.log("Error", error))
  }
)
