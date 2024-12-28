"use client";
import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, updateTodo } from "@/api/task-api";

interface TaskProp {
  task: ITask;
}
const Task: React.FC<TaskProp> = ({ task }) => {
  const router = useRouter();
  const [editTaskValue, setEditTaskValue] = useState(task.text);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(editTaskValue);
    await updateTodo({
      id: task.id,
      text: editTaskValue,
    });
    setOpenModalEdit(false);
    router.refresh();
  };
  const handleSubmitDelete = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => {
            setOpenModalEdit(true);
          }}
          size={25}
          className="text-blue-500"
        />
        <Modal openModal={openModalEdit} setOpenModal={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold font-lg">Edit task</h3>
            <div className="modal-action">
              <input
                value={editTaskValue}
                onChange={(e) => {
                  setEditTaskValue(e.target.value);
                }}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenModalDelete(true)}
          size={25}
          className="text-red-500"
        />
        <Modal openModal={openModalDelete} setOpenModal={setOpenModalDelete}>
          <h3 className="text-lg">Are you sure you want to delete task?</h3>
          <div className="modal-action">
            <button onClick={() => handleSubmitDelete(task.id)} className="btn">
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
