import { ITask } from "@/typse/tasks";

const baseUrl = "http://localhost:3001";
//TODO use simple_flask_todo (https://github.com/AndreyKhmara/simple_flask_todo)
export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/todos`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export const addNewTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/todo/update/${todo.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

  const updatedTodo = await res.json();
  return updatedTodo;
};

export const checkTodo = async ({
  id,
  isCompleted,
}: Omit<ITask, "text">): Promise<void> => {
  await fetch(`${baseUrl}/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isCompleted }),
  });
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/todos/${id}`, {
    method: "DELETE",
  });
};
