const express = require("express")
const app = express()
const morgan = require("morgan")
app.use(morgan("tiny"))

app.use(express.json())

let contacts = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
    ]

app.get("/", (request, response) => {
    response.send("<h1>Hello</h1>")
})

app.get("/api/persons", (request, response) => {
    response.json(contacts)
})

app.get("/info", (request, response) => {
    response.send("<p>Phonebook has info for " + contacts.length + " people <br> " + new Date() + "</p>")
})

app.get("/api/persons/:id", (request, response) => {
    const id = request.params.id
    const contact = contacts.find(contact => contact.id == id)
    if (contact) {
        response.json(contact)
    } else {
        response.status(404).end()
    }
})

app.delete("/api/persons/:id", (request, response) => {
    const id = request.params.id
    contacts = contacts.filter(contact => contact.id !== id)
    response.status(204).end()
})

app.post("/api/persons", (request, response) => {
    const body = request.body
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: "content missing"
        })
    }
    if (contacts.find(contact => contact.name === body.name)) {
        return response.status(400).json({
            error: "contact already in contacts"
    })
    }
    
    const contact = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random() * 100000)
    }
    contacts = contacts.concat(contact)
    response.json(contact)
})

const PORT = 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})