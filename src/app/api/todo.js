import { findAll } from '../../repositories/todo-item.repository';

/**
 * GET /api/todo
 */
export async function handle(req, res) {
  if (req.method === 'GET') {
    try {
      const todoItems = await findAll();

      res.status(200).json(todoItems);
    } catch (e) {
      console.log(`Error retrieving todo list items - ${e}`)

      res.status(500).json({ error: 'Internal Server Error' })
    }
  } else {
    res.status(405).json({ error: 'Must use GET method' })
  }
}
