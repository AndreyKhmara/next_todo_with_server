import { ITask } from "@/typse/tasks";
interface ITodoListProps {
  tasks: ITask[];
}
import { Task } from "./Task";

//todo stop on 22
// at first start mock server (npm run json-server)
export const TodoList: React.FC<ITodoListProps> = ({ tasks }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
