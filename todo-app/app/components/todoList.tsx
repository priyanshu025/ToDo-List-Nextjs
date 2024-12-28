import { ITask } from "@/types/tasks";
import Task from "./task";

interface TodoListProps {
  tasks: ITask[];
}
const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-slate-300">
          <tr>
            <th>TASKS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody className="bg-slate-100">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
