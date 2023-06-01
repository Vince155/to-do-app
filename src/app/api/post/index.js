import { createTodoItem } from '../../../repositories/todo-item.repository'

/**
 * POST /api/post
 */
export async function handle(req, res) {
  if (req.method === 'POST') {
    try {
      const todo = req.body;
      const todoItem = await createTodoItem(todo);

      res.status(201).json(todoItem);
    } catch (e) {
      console.log(`Error creating todo - ${e}`)

      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else {
    res.status(405).json({ error: 'Must use POST method' })
  }
}
