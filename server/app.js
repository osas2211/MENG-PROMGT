require("dotenv").config()
const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema")
const app = express()
const PORT = process.env.PORT || 5000

app.use(
  "graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
)

app.listen(PORT, () => console.log(`listening at PORT ${PORT}`))
