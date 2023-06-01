import { updateTodoItem } from '../../repositories/todo-item.repository';

/**
 * PUT /api/update/:id
 */
export async function handle(req, res) {
  if (req.method === 'PUT') {
    const id = req.query.id
    const { title, description, dueDate} = req.body;

    try {
      const updatedTodo = await updateTodoItem({
        id,
        title,
        description,
        dueDate
      });

      res.status(201).json(updatedTodo)
    } catch (e) {
      console.log(`Err: ${e}`)

      res(500).json({ error: 'Internal Server Error' })
    }
  } else {
    res(405).json({ error: 'Must use PUT method' })
  }
}
