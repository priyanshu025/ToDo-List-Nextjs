import { getAllTodos } from "@/api/task-api";
import Addtask from "./components/addtask";
import TodoList from "./components/todoList";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <Addtask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
