"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { TaskModal } from "@/app/components/TaskModal";
import { useState } from "react";
import { addNewTodo } from "@/api";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export const AddTask = () => {
  const router = useRouter(); //need to refesh todo list after add todo
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTextValue, setNewTextValue] = useState<string>("");

  const handleSubmitNewTodo: React.FormEventHandler<HTMLFormElement> = async (
    e,
  ) => {
    e.preventDefault();
    await addNewTodo({ id: uuidv4(), text: newTextValue, isdone: false });
    setNewTextValue("");
    setModalOpen(false);
    router.refresh(); //need to refesh todo list after add todo
  };

  return (
    <div>
      <button
        className="btn btn-primary w-full"
        onClick={() => setModalOpen(true)}
      >
        Add new task
        <AiOutlinePlus size={18} className="ml-2" />
      </button>

      <TaskModal open={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="fonth-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTextValue}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              onChange={(e) => setNewTextValue(e.target.value)}
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </TaskModal>
    </div>
  );
};
