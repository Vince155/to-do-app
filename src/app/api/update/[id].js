import { NextResponse } from 'next/server';
import { updateTodoItem } from '../../repositories/todo-item.repository';

/**
 * PUT /api/update/:id
 */
export async function PUT(request, { params }) {
  const { title, description, dueDate } = req.body;
  const id = params.id;

  if (request.method === 'PUT') {
    try {
      const updatedItem = await updateTodoItem({
        id,
        title,
        description,
        dueDate
      });
  
      return NextResponse.json(
        updatedItem,
        { status: 200 }
      );
    } catch (e) {
      console.log(`Err: ${e}`);
  
      return NextResponse({ error: 'Internal Server Error'}, { status: 500 });
    }
  } else {
    return NextResponse.json(
      { error: 'Must use PUT method' },
      { status: 405 }
    );
  }
}
