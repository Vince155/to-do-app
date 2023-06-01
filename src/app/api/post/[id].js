import { deleteTodo } from '../../../repositories/todo-item.repository'

/**
 * DELETE /api/post/:id
 */
export async function handle(req, res) {
  if (req.method === 'DELETE') {
    try {
      const id = req.query.id;
      const todo = await deleteTodo({ id });

      res.status(200).json(todo);
    } catch (e) {
      console.log(`Error deleting todo - ${e}`)

      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else {
    res.status(405).json({ error: 'Must use the DELETE method' })
  }
}
