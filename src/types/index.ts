export interface LoginData {
  userName: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  token: string | null;
}

export interface ProfileData {
  userName: string,
  email: string,
  phone: string,
  department: string
}

export interface TodoItem {
  id: number,
  userId: string,
  title: string,
  status: "Pending" | "OnProgress" | "Completed",
  dueDate: string
}