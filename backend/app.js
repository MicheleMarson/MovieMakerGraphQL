const express = require("express")
const app = express()
const mongoose = require("mongoose")
const {graphqlHTTP} = require("express-graphql")
const movieSchema = require("./schema/schema")
const resolver = require("./resolver/resolver")
const cors = require("cors")

app.use(cors({origin: "http://localhost:3000", credentials: true}))


mongoose.connect("mongodb+srv://admin:admin@cluster0.hb3xa.mongodb.net/moviemaker?retryWrites=true&w=majority", {})
.then(() => console.log("Mongodb connected"))
.catch((err) => console.log("Error", err))


app.use("/graphql", graphqlHTTP({
  schema: movieSchema, 
  graphiql: true,
  rootValue: resolver
}))


app.get("/", (req, res) => {
  res.send("Hello from backend")
})

app.listen(4000, () => {
  console.log("Server on 4000");
  
})

module.export = app