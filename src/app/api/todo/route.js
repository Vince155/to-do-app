import { NextResponse } from 'next/server';
import { findAll } from '../../../repositories/todo-item.repository';

/**
 * GET /api/todo
 */
export async function GET(request) {
  if (request.method === 'GET') {
    try {
      const todoItems = await findAll();

      return NextResponse.json(todoItems, { status: 200})
    } catch (e) {
      console.log(`Error retrieving todo list items - ${e}`)

      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { error: 'Must use GET method' },
      { status: 405 }
    );
  }
}
