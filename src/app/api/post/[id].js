import { NextResponse } from 'next/server';
import { deleteTodo } from '../../../repositories/todo-item.repository'

/**
 * DELETE /api/post/:id
 */
export async function DELETE(request, { params }) {
  const id = params.id;

  if (request.method === 'DELETE') {
    try {
      const deletedTodo = await deleteTodo({ id });

      return NextResponse.json(deletedTodo, { status: 200 });
    } catch (e) {
      console.log(`Err: ${e}`);
  
      return NextResponse({ error: 'Internal Server Error'}, { status: 500 });
    }
  } else {
    return NextResponse.json(
      { error: 'Must use DELETE method' },
      { status: 405 }
    );
  }
}
