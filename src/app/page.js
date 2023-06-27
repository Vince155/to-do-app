"use client"

import Link from 'next/link';
import { useState } from 'react';

async function getTodoListItems() {
  try {
    const response = await fetch('http://localhost:3000/api/todo/', {
      method: 'GET'
    });
    const todoItems = response.json();

    return todoItems;
  } catch (e) {
    console.log(`Error getting todo list - ${e}`)
  }  
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <Todos />
      </ul>
      <Link href={'/todo/create'}>
        <button>Create Todo</button>
      </Link>
    </main>
  )
}

async function Todos() {
  const [todoItems, setTodoItems] = useState([]);
  const todos = await getTodoListItems();

  setTodoItems(todos);

  return todoItems.map((todo) => {
    <li key={todo.id}>
      {todo.title}
      {todo.description}
      {todo.dueDate}
    </li>
  })
}
