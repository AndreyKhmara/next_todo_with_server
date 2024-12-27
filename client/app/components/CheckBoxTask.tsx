"use client";
import React, { useState } from "react";
import { checkTodo } from "@/api";
import { useRouter } from "next/navigation";

interface IProps {
  id: string;
  isdone: boolean;
}

export const CheckBoxTask: React.FC<IProps> = ({ isdone, id }) => {
  const [checked, setChecked] = useState<boolean>(isdone);
  const router = useRouter(); //need to refesh todo list after add todo

  const handleCheckTodo = async () => {
    await checkTodo({ id, isdone: checked });
    setChecked(!checked);
    router.refresh();
  };

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input
          checked={isdone}
          onChange={handleCheckTodo}
          type="checkbox"
          className="checkbox checkbox-primary"
        />
      </label>
    </div>
  );
};
