import React from "react";
import type { TodoItem } from "@/types";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip as ReTooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ChartGrid, ChartCard } from "@/style/chart";

type Props = {
  todos?: TodoItem[];
};

const STATUS_COLORS: Record<string, string> = {
  Pending: "#f87070",
  OnProgress: "#f0c419",
  Completed: "#6ad07a",
};

const formatByDueDate = (todos: TodoItem[]) => {
  const map: Record<string, number> = {};
  todos.forEach((t) => {
    const key = t.dueDate || "No date";
    map[key] = (map[key] || 0) + 1;
  });
  return Object.entries(map)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => (a.date > b.date ? 1 : -1));
};

export const TodoChart: React.FC<Props> = ({ todos = [] }) => {
  const statusCounts = todos.reduce<Record<string, number>>((acc, cur) => {
    acc[cur.status] = (acc[cur.status] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(statusCounts).map(([name, value]) => ({
    name,
    value,
  }));
  const barData = formatByDueDate(todos);

  return (
    <ChartGrid>
      <ChartCard>
        <h3>Status Distribution</h3>
        <div className="chartInner">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                innerRadius={30}
                paddingAngle={4}
              >
                {pieData.map((entry) => (
                  <Cell
                    key={entry.name}
                    fill={STATUS_COLORS[entry.name] || "#8884d8"}
                  />
                ))}
              </Pie>
              <ReTooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      <ChartCard>
        <h3>Tasks by Due Date</h3>
        <div className="chartInner">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barData}
              margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <ReTooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
    </ChartGrid>
  );
};

export default TodoChart;
