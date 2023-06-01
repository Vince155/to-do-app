import { Router } from 'next/router';
import { findAll } from '../../repositories/todo-item.repository';
import Image from 'next/image';
import { useEffect, useState } from 'react';


async function getTodoListItems() {
  try {
    const response = await fetch('/api/todo', {
      method: 'GET'
    });

    const todoItems = response.json();

    return todoItems;
  } catch (e) {
    console.log(`Error getting todo list`)
  }
  
  await Router.push('/')
}

export default function Home() {
  const [todoItems, setTodoItems] = useState([]);

  const items = getTodoListItems();

  setTodoItems(items);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
    </main>
  )
}
