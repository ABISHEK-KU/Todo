import React from "react";
import TodoChart from "@/components/TodoChart";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export const DashBoard: React.FC = () => {
  const userId = useSelector((state: RootState) => state.auth.user);
  const allTodos = useSelector((state: RootState) => state.todo.todos);
  
  const userTodos = allTodos.filter(todo => todo.userId === userId);

  return (
    <div style={{ width: "100%", padding: 20 }}>
      <TodoChart todos={userTodos} />
    </div>
  );
};

export default DashBoard;

