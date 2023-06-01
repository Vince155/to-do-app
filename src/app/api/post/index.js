import { NextResponse } from 'next/server';
import { createTodoItem } from '../../../repositories/todo-item.repository'

/**
 * POST /api/post
 */
export async function POST(request) {
  if (request.method === 'POST') {
    try {
      const todo = request.body;
      const todoItem = await createTodoItem(todo);

      return NextResponse.json(todoItem, { status: 201 });
    } catch (e) {
      console.log(`Error creating todo - ${e}`)

      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      )
    }
  } else {
    return NextResponse.json(
      { error: 'Must use POST method' },
      { status: 405 }
    );
  }
}
