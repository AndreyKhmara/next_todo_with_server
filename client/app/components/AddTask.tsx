import { AiOutlinePlus } from "react-icons/ai";

export const AddTask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add new task
        <AiOutlinePlus size={18} className="ml-2" />
      </button>
    </div>
  );
};
