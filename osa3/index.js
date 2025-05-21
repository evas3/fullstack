const http = require("http")

let numerot = [
{
  "persons":[
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": "1"
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": "2"
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": "3"
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": "4"
    }
  ]
}
]

const app = http.createServer((request, response) => {
    response.writeHead(200, {"content-Type": "application/json"})
    response.end(JSON.stringify(numerot))
})

const port = 3001
app.listen(port)
console.log("server runin")
