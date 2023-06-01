"use client"

import { useEffect, useState } from 'react';

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

export default function Home() {
  const [todoItems, setTodoItems] = useState([]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
    </main>
  )
}
