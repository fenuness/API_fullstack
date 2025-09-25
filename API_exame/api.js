import express from "express" // importando do node_modules

const app = express();
const PORT = 200;

//  Servidor rodando na porta 200
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

app.use(express.json()) // necessário para ler JSON do body

// GET - listar tarefas (simulação)
app.get('/', async (req, res) => {
    try {
        const rows = [
            { id: 1, materia: 'Matemática' }, // simulando banco
        ]
        res.json(rows)
    } catch {
        res.status(500).json({ error: 'Erro ao listar tarefas' })
    }
})

// POST - criar tarefa (simulação)
app.post('/', async (req, res) => {
    try {
        const { id, materia } = req.body  // pega os dados do body
        res.json({ id, materia })
    } catch {
        res.status(409).json({ error: 'Erro ao criar tarefa' })
    }
})

// PUT - atualizar tarefa (simulação)
app.put('/tasks/:id', async (req, res) => { 
    try {
        const { id, materia } = req.body   // pega a nova matéria do body
        res.json({ id, materia })  // devolve atualizado
           
    } catch {
        res.status(409).json({ error: 'Erro ao atualizar tarefa' })
    }
})

// DELETE - deletar tarefa (simulação)
app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.body
    res.json({ message: `Tarefa com ID ${id} deletada (simulação)` })
})
