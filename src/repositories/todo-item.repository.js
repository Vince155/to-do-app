import prisma from '../../prisma/client';

/**
 * Get all of the existing todos
 *
 * @returns All of the todos
 */
export async function findAll() {
  try {
    const allItems = await prisma.todoItem.findMany();

    return allItems;
  } catch (e) {
    console.log(`Err: ${e}`)
  }
}

/**
 * Get the todo corresponding to the ID
 *
 * @param {number} id ID for the todo
 * @returns The todo item corresponding to the ID
 */
export async function findOne({ id }) {
  try {
    const todoItem = await prisma.todoItem.findUnique({
      where: { id },
    });

    return todoItem;
  } catch (e) {
    console.log(`Err: ${e}`)
  }
}

/**
 * Delete a todo based on the given ID
 *
 * @param {number} id ID for the todo
 * @returns The deleted todo
 */
export async function deleteTodo({ id }) {
  try {
    const todo = await prisma.todoItem.delete({
      where: { id },
    });

    return todo;
  } catch (e) {
    console.log(`Err: ${e}`)
  }
}

/**
 * Create a todo list item with a custom title, description and/or due date
 *
 * @param {number} id - The todo item ID
 * @param {string} title - The todo item title
 * @param {string} description - The todo item description
 * @param {Date} dueDate - The todo item due date
 * @returns - The update todo
 */
export async function createTodoItem({
  title,
  description,
  dueDate
}) {
  try {
    const potentiallyNullDate = dueDate || null;

    const todo = await prisma.todoItem.create({
      data: {
        title,
        description,
        dueDate: potentiallyNullDate,
      }
    });

    return todo;
  } catch (e) {
    console.log(`Err: ${e}`);

    return null;
  }
}

/**
 * Update the title, description and/or due date of a todo list item
 *
 * @param {number} id - The todo item ID
 * @param {string} title - The todo item title
 * @param {string} description - The todo item description
 * @param {Date} dueDate - The todo item due date
 * @returns - The update todo
 */
export async function updateTodoItem({
    id,
    title,
    description,
    dueDate
  }) {
  try {
    const potentiallyNullDate = dueDate || null;

    const updatedItem = await prisma.todoItem.update({
      where: { id },
      data: {
        title,
        description,
        dueDate: potentiallyNullDate,
      }
    });

    return updatedItem;
  } catch (e) {
    console.log(`Err: ${e}`);

    return null;
  }
}
