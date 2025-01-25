const express = require("express")
const app = express()
const mongoose = require("mongoose")
const {graphqlHTTP} = require("express-graphql")
const movieSchema = require("../schema/schema")
const resolver = require("../resolver/resolver")
const cors = require("cors")

app.use(cors({
  origin: "https://moviemaker-woad.vercel.app", // Replace with your actual frontend URL
  credentials: true,
}))


mongoose.connect(process.env.MOVIEMAKER_MONGODB_URI, {})
.then(() => console.log("Mongodb connected"))
.catch((err) => console.log("Error", err))


app.use("/graphql", graphqlHTTP({
  schema: movieSchema, 
  graphiql: false,
  rootValue: resolver
}))


app.get("/", (req, res) => {
  res.send("Hello from backend")
})


module.exports = app