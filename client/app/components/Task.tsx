import { ITask } from "@/typse/tasks";

interface TaskProps {
  task: ITask;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td>blue</td>
    </tr>
  );
};
