import React from "react";
import TodoChart from "@/components/TodoChart";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { DashboardContainer } from "@/style/dashboard";

export const DashBoard: React.FC = () => {
  const userId = useSelector((state: RootState) => state.auth.user);
  const allTodos = useSelector((state: RootState) => state.todo.todos);

  const userTodos = allTodos.filter((todo) => todo.userId === userId);

  return (
    <DashboardContainer>
      <TodoChart todos={userTodos} />
    </DashboardContainer>
  );
};

export default DashBoard;
