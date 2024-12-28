import { ITask } from "@/types/tasks";

const baseUrl = "http://localhost:3000";

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export const addNewTodo = async (task: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const newTodo = res.json();
  return newTodo;
};

export const updateTodo = async (task: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const updatedTodo = res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  const res = await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE",
  });
};
