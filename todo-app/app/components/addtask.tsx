"use client";
import { EventHandler, FormEventHandler, useState } from "react";
import { IoAdd } from "react-icons/io5";
import Modal from "./Modal";
import { addNewTodo } from "@/api/task-api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const Addtask = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(newTaskValue);
    await addNewTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue("");
    setOpenModal(false);
    router.refresh();
  };
  return (
    <div>
      <button
        className="btn btn-primary w-full"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        ADD NEW TASK <IoAdd size={20} className="ml-2" />
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold font-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => {
                setNewTaskValue(e.target.value);
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
    </div>
  );
};

export default Addtask;
