"use client";
import { ITask } from "@/typse/tasks";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { TaskModal } from "@/app/components/TaskModal";
import { useState } from "react";
import { deleteTodo, editTodo } from "@/api";

import { useRouter } from "next/navigation";
import { CheckBoxTask } from "@/app/components/CheckBoxTask";

interface TaskProps {
  task: ITask;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  const router = useRouter(); //need to refesh todo list after add todo

  const handleSubmitEditTodo: React.FormEventHandler<HTMLFormElement> = async (
    e,
  ) => {
    e.preventDefault();
    await editTodo({ id: task.id, text: taskToEdit, isdone: false });
    setOpenModalEdit(false);
    router.refresh(); //need to refesh todo list after add todo
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh(); //need to refesh todo list after add todo
  };

  return (
    <tr key={task.id}>
      <td className="w-full ">
        <div className="flex gap-5 items-center">
          <CheckBoxTask isdone={task.isdone} id={task.id} />
          {task.text}
        </div>
      </td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={25}
        />
        <TaskModal open={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="fonth-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                onChange={(e) => setTaskToEdit(e.target.value)}
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </TaskModal>

        <FiTrash2
          onClick={() => setOpenModalDelete(true)}
          cursor="pointer"
          className="text-red-500"
          size={25}
        />
        <TaskModal open={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-lg">Are your shure?</h3>
          <div className="modal-action">
            <button className="btn" onClick={() => handleDeleteTask(task.id)}>
              Yes
            </button>
          </div>
        </TaskModal>
      </td>
    </tr>
  );
};
