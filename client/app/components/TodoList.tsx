import { ITask } from "@/typse/tasks";
interface ITodoListProps {
  tasks: ITask[];
}

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
            {tasks.map((tasks) => (
              <tr key={tasks.id}>
                <td>{tasks.text}</td>
                <td>{tasks.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
